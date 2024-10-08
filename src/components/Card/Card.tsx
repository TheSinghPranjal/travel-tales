import { FC } from "react";
import './Card.css';
import Image from 'next/image'
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useRouter } from 'next/navigation';

interface CardProps {
    id: number
    format_indent_increase: number,
    name?: string,
    startDate?: string,
    endDate?: string,
    location?: string,
    charges?: number,
    description?: string,
    activities?: string[],
    numberOfDays?: number,
    image?: StaticImport | string,
    weather?: string,
    recommendedSeason?: string,
    nearbyAttractions?: string,
    onClick?: any,
    place?: string

}

const Card: FC<CardProps> = (props) => {

    const router = useRouter();

    const { name, startDate, endDate, location, charges, description, activities, numberOfDays, image, weather, recommendedSeason, nearbyAttractions, onClick } = props




    return (
        <>
            {
                <div className="card">
                    {image && <Image width={200} height={500} src={image} alt={name as string} className="card-image w-full h-64" />}
                    <div className="card-overlay">
                        <div className="card-details">
                            <h2>{name}</h2>
                            <p>{location}</p>
                            <p>{numberOfDays} days</p>
                        </div>
                    </div>
                </div>
            }

        </>
    )

}

export default Card;