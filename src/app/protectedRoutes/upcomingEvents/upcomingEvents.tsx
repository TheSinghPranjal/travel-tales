'use client'
import Card from "@/components/Card/Card";
import Slider from "@/components/CustomSlider/CustomSlider";
import CustomDropdown from "@/components/Dropdown/CustomDropdown";
// import './upcomingEvents.css';
import { trips } from "@/data/data";
import { activityDetails } from "@/data/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { UrlObject } from "url";
// import { sliderDetails } from "@/data/data";

const UpcomingEvents = () => {
    const router = useRouter()
    const itemsToShow = 6;
    const [data, setData] = useState(trips.slice(0, itemsToShow))

    const handleFormChange: any = (value: any, type: string) => {
        // Update the form state with the selected value and type
        console.log(value, type, 'hello')

    }

    const loadMore = () => {
        if (data.length + itemsToShow < trips.length)
            setData([...data, ...trips.slice(data.length, data.length + itemsToShow)])
        else
            setData([...data, ...trips.slice(data.length, trips.length)])
    }

    return (
        <>
            <div className='my-12 px-5 '>
                <div className="mb-3 text-[20px]" style={{ font: 'fantasy', fontSize: '25px' }}>
                    Upcoming Trips
                </div>
                {/* 
                <CustomDropdown
                    selectValue={circleData[0]}
                    handleSelectOptionChange={(selected) => handleFormChange?.(selected, 'destination')}
                    selectDropDownId='destination'
                    selectOptions={circleData}
                    isClearable={true}
                    isMultiSelect={false}
                    isDisabled={false}
                    isClearableForSingleSelect={false}
                    isLoading={false}
                    isSearchable={true}
                /> */}

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        data.map((trip) => {
                            return (
                                <Link key={trip.key} href={`/protectedRoutes/trips/${trip.key}`}>
                                    <Card
                                        id={trip.key}
                                        name={trip.name}
                                        location={trip.location}
                                        numberOfDays={trip.numberOfDays}
                                        image={trip.images[0]} format_indent_increase={0} />
                                </Link>
                            )
                        })
                    }
                </div>
                {data.length < trips.length && <button onClick={loadMore}>load more</button>}
            </div>

            <div className='my-12 px-5 '>
                <div className="mb-3 text-[20px]" style={{ font: 'fantasy', fontSize: '25px' }}>
                    Upcoming Activities
                </div>
                {/* 
                <CustomDropdown
                    selectValue={circleData[0]}
                    handleSelectOptionChange={(selected) => handleFormChange?.(selected, 'destination')}
                    selectDropDownId='destination'
                    selectOptions={circleData}
                    isClearable={true}
                    isMultiSelect={false}
                    isDisabled={false}
                    isClearableForSingleSelect={false}
                    isLoading={false}
                    isSearchable={true}
                /> */}
                <div style={{ marginBottom: '40px' }}>
                    <Slider sliderImageUrl={activityDetails} showDots={false} />
                </div>




                <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        activityDetails.map((activity) => {
                            return (
                                <Card
                                    key={activity.key}
                                    id={activity.key}
                                    name={activity.name}
                                    location={activity.location}
                                    numberOfDays={activity.numberOfHoursRequired}
                                    image={activity.images[0]} format_indent_increase={0} />
                            )
                        })
                    }

                </div>
            </div>

        </>
    )

}

export default UpcomingEvents;