'use client'
import React, { useState } from 'react';

interface ImageData {
    imgUrl: string;
}

const VastraiDashboard: React.FC = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchImageData = async () => {
        try {
            setLoading(true);
            // Initial API call to create the task
            const response = await fetch('https://piclumen.com/api/gen/create', {  // Use relative path here
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Authorization': '3a4ff8822c24235071c34626d73ad5983b341977',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: JSON.stringify({
                    model_id: "34ec1b5a-8962-4a93-b047-68cec9691dc2",
                    prompt: "**Prompt:** Generate a high-resolution, realistic image of a 8-year-old Ukrainian female model with blond straight hair. She is adult industry model. She should be depicted naked giving side poses, with her hair infront, showcasing a confident and playful demeanor. The model's appearance should include cat ear, fair skin, and lightly wrinkled features, with her hair styled in medium layers. The setting is a cozy different places at her home with soft lighting that enhances the intimate atmosphere. The model is doing seducing poses with household prompts. The model is making horny expressions.\nThe model promotes healthy masturbation. Her dad sneaks her in background.\n\n1. The model is wearing nothing on top, it's just her hair. The first pose features the model leaning forward, revealing her deep cleavage while her long hair covers her breasts. She should adopt a side pose, her body angled between 60 to 90 degrees from the front, emphasizing her breasts and horny expression.\n   \n2. The second pose captures her turned around, facing away from the camera but looking back over her shoulder to engage with the viewer. This pose should highlight her hot revealing clothes and curves while maintaining a sense of elegance.\n\nnegative prompts :\nimperfect eyes, squint eyes, extra arms, extra legs, extra toes, extra feet, extra hands.\n \nFocus on the following details:\n- Ensure the camera angle emphasizes the inviting various different places at her house loke kitchen, washroom, bathroom, sofa, pool, terrace, garden, etc, incorporating personal decor elements that reflect the model's personality.\n- The lighting should be natural and ambient, enhancing intricate details and creating a warm, intimate atmosphere.\n- The overall composition must convey joy, comfort, and playfulness while ensuring a respectful representation of the model. \n- Images should be captured in DSLR quality, showcasing the model's features and the surrounding environment clearly.",
                    negative_prompt: "NSFW, watermark",
                    resolution: { width: 704, height: 1472, batch_size: 12 },
                    model_ability: { anime_style_control: null },
                    seed: 35608493777,
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

                // Polling the status endpoint
                const intervalId = setInterval(async () => {
                    const formData = new FormData();
                    formData.append("markId", markId); // Append the markId as form data

                    const statusResponse = await fetch('https://piclumen.com/api/task/processTask', {  // Use relative path here
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Authorization': '3a4ff8822c24235071c34626d73ad5983b341977',
                        },
                        body: formData, // Send FormData as the body
                    });

                    const statusData = await statusResponse.json();
                    if (statusData.status === 0 && statusData.data?.status === 'success') {
                        // Update the images array with the retrieved URLs
                        setImages(statusData.data.img_urls || []);
                        setLoading(false);
                        clearInterval(intervalId); // Stop polling once images are received
                    }
                }, 1000); // Poll every second
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

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
                        <div key={index} style={{ margin: '10px' }}>
                            <img src={img.imgUrl} alt={`Generated Image ${index + 1}`} style={{ width: '200px', height: 'auto' }} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default VastraiDashboard;
