'use client';
import React, { FC } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CustomCollapseDetails from '../CustomCollapseDetails/CustomCollapseDetails';
import PlanTrip from './PlanTrip/PlanTrip';
import './TripDetails.css';

type TripDetailPropType = {
    tripDetail: TripDetail;
};

type TripDetail = {
    name: string;
    location: string;
    description?: string;
    activities?: string[];
    images: { src: string }[];
    weather?: string;
    recommendedSeason?: string;
    nearbyAttractions?: string[];
} | undefined;

const CustomTripDetailsComponent: FC<TripDetailPropType> = ({ tripDetail }) => {
    return (
        <div className="trip-details-container">
            {/* Banner Image */}
            <div className='banner-image-box'>
                <div className="banner-image">
                    <img src={tripDetail?.images[0].src} alt={tripDetail?.name} />
                </div>
            </div>

            {/* Heading and Subheading */}
            <div className="trip-header">
                <h1 className="trip-name">{tripDetail?.name}</h1>
                <h2 className="trip-location">{tripDetail?.location}</h2>
            </div>

            {/* Main Content */}
            <div className="trip-content">
                {/* Left Column: Description */}
                <div className="left-column">
                    <div className="description-box">
                        <h3>Description</h3>
                        <p>{tripDetail?.description}</p>
                    </div>
                </div>

                {/* Right Column: Activities */}
                <div className="right-column">
                    <div className="activities-box">
                        <div className='d-flex justify-space-between'>
                            <h3>Activities</h3>
                            {/* <CustomButton buttonId={''} buttonText={'Plan Trip'} handleClick={() => { console.log('hey') }} /> */}
                            <CustomCollapseDetails buttonClassName='moreDetailsClass' headerText="PLAN TRIP" children={<PlanTrip />} />
                        </div>
                        <ul>
                            {tripDetail?.activities?.map((activity, index) => (
                                <li key={index}>{activity}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Other Info Box */}
            <div className="other-info-box">
                <h3>Other Information</h3>
                <p>Weather: {tripDetail?.weather}</p>
                <p>Recommended Season: {tripDetail?.recommendedSeason}</p>
                <p>Nearby Attractions: {tripDetail?.nearbyAttractions?.join(', ')}</p>
            </div>

            {/* Collapsible Panel */}

        </div>
    );
};

export default CustomTripDetailsComponent;
