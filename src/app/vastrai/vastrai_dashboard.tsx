'use client'
import React, { useState, useEffect } from 'react';

interface ImageData {
    imgUrl: string;
}

const VastraiDashboard: React.FC = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchImageData = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://piclumen.com/api/gen/create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Authorization': '6319c982b6a89a3a6f37136b75cba6040235e54d',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify({
                    model_id: "34ec1b5a-8962-4a93-b047-68cec9691dc2",
                    prompt: " orange cat",
                    negative_prompt: "NSFW, watermark",
                    resolution: { width: 704, height: 1472, batch_size: 4 },
                    model_ability: { anime_style_control: null },
                    seed: 1212677203,
                    steps: 25,
                    cfg: 4.5,
                    sampler_name: "dpmpp_2m_sde_gpu",
                    scheduler: "karras",
                    ponyTags: {},
                    denoise: 1,
                    hires_fix_denoise: 0.5,
                    hires_scale: 2,
                    gen_mode: "quality",
                    img2img_info: { weight: 0 },
                }),
            });

            const createData = await response.json();
            if (createData.status === 0 && createData.data?.markId) {
                const markId = createData.data.markId;

                const intervalId = setInterval(async () => {
                    const formData = new FormData();
                    formData.append("markId", markId);

                    const statusResponse = await fetch('https://piclumen.com/api/task/processTask', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Authorization': '6319c982b6a89a3a6f37136b75cba6040235e54d',
                        },
                        body: formData,
                    });

                    const statusData = await statusResponse.json();
                    if (statusData.status === 0 && statusData.data?.status === 'success') {
                        setImages(statusData.data.img_urls || []);
                        setLoading(false);
                        clearInterval(intervalId);
                    }
                }, 1000);
            } else {
                setLoading(false);
                console.error("Failed to initiate image generation:", createData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const downloadImage = async (imgUrl: string) => {
        try {
            const response = await fetch(imgUrl, { method: 'GET' });
            if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = `image_${Date.now()}.jpg`;
            link.click();
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    };

    useEffect(() => {
        if (images.length > 0) {
            const timer = setTimeout(() => {
                images.forEach((img) => downloadImage(img.imgUrl)); // Automatically download all images
            }, 10000); // 10 seconds delay

            return () => clearTimeout(timer); // Clean up timer on component unmount or images change
        }
    }, [images]);

    return (
        <div>
            <button onClick={fetchImageData} disabled={loading} style={{ marginBottom: '20px' }}>
                {loading ? 'Generating Images...' : 'Generate Images'}
            </button>
            {loading ? (
                <p>Loading images...</p>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {images.map((img, index) => (
                        <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
                            <img src={img.imgUrl} alt={`Generated Image ${index + 1}`} style={{ width: '200px', height: 'auto' }} />
                            <button onClick={() => downloadImage(img.imgUrl)} style={{ marginTop: '10px' }}>
                                Download
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default VastraiDashboard;
