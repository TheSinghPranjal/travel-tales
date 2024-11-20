'use client'
import React, { useState, useEffect } from 'react';

interface ImageData {
    imgUrl: string;
}

interface ImageData2 {
    imgUrl2: string;
}

const CatAi: React.FC = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState(false);

    //pranjalares@gmail.com

    const fetchImageData = async () => {
        try {
            setLoading(true);

            // Generate a random seed between 100000000000 and 999999999999
            const randomSeed = Math.floor(Math.random() * (99999999999 - 20000000000 + 1)) + 10000000000;

            const response = await fetch('https://piclumen.com/api/gen/create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Authorization': '6319c982b6a89a3a6f37136b75cba6040235e54d',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify({
                    model_id: "34ec1b5a-8962-4a93-b047-68cec9691dc2",
                    prompt: `orange cat in different environments, closeup pics
                    the cat is really cute,
                    some are kittens 
                    negative prompts :
                    imperfect eyes, squint eyes, extra arms, extra legs, extra toes, extra feet, extra hands.
                    
                    Focus on the following details:
                    - Ensure the camera angle emphasizes the inviting bedroom environment, incorporating personal decor elements that reflect the model's personality.
                    - The lighting should be natural and ambient, enhancing intricate details and creating a warm, intimate atmosphere.
                    - The overall composition must convey joy, comfort, and playfulness while ensuring a respectful representation of the model. 
                    - Images should be captured in DSLR quality, showcasing the model's features and the surrounding environment clearly.
                    `,
                    negative_prompt: "NSFW, watermark",
                    resolution: { width: 704, height: 1472, batch_size: 4 },
                    model_ability: { anime_style_control: null },
                    seed: randomSeed,
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

    // First useEffect: Handles image downloading
    useEffect(() => {
        if (images.length > 0) {
            const downloadTimer = setTimeout(() => {
                images.forEach((img) => downloadImage(img.imgUrl));
            }, 10000); // 10 seconds delay

            return () => clearTimeout(downloadTimer);
        }
    }, [images]);

    // Second useEffect: Triggers fetchImageData 5 seconds after downloading

    useEffect(() => {
        if (images.length > 0) {
            const regenerateTimer = setTimeout(() => {
                fetchImageData();
            }, 25000);

            return () => clearTimeout(regenerateTimer);
        }
    }, [images]);

    return (
        <>
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
            {/* <div>
                <button onClick={fetchImageData2} disabled={loading} style={{ marginBottom: '20px', color: 'red' }}>
                    {loading2 ? 'Generating Images...' : 'Generate Images'}
                </button>
                {loading2 ? (
                    <p>Loading images set 2...</p>
                ) : (
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {images2.map((img, index) => (
                            <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
                                <img src={img.imgUrl2} alt={`Generated Image ${index + 1}`} style={{ width: '200px', height: 'auto' }} />
                                <button onClick={() => downloadImage2(img.imgUrl2)} style={{ marginTop: '10px' }}>
                                    Download
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div> */}
        </>
    );
};

export default CatAi;
