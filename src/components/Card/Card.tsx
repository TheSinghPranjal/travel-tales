import { FC } from "react";

interface CardProps {
    key: number,
    name?: string,
    startDate?: string,
    endDate?: string,
    location?: string,
    charges?: number,
    description?: string,
    activities?: string[],
    numberOfDays?: number,
    image?: string,
    weather?: string,
    recommendedSeason?: string,
    nearbyAttractions?: string
}


const Card: FC<CardProps> = (props) => {

    const { key, name, startDate, endDate, location, charges, description, activities, numberOfDays, image, weather, recommendedSeason, nearbyAttractions } = props


    return (
        <>
            {
                <div className="card">
                    <img src={image} alt={name} className="card-image" />
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