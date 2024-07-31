'use client'
import Card from "@/components/Card/Card";
import CustomDropdown from "@/components/Dropdown/CustomDropdown";
// import './upcomingEvents.css';
import { trips } from "@/data/data";
import { activityDetails } from "@/data/data";

const UpcomingEvents = () => {

    const handleFormChange: any = (value: any, type: string) => {
        // Update the form state with the selected value and type
        console.log(value, type, 'hello')

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
                        trips.map((trip) => {
                            return (
                                <Card
                                    key={trip.key}
                                    name={trip.name}
                                    location={trip.location}
                                    numberOfDays={trip.numberOfDays}
                                    image={trip.images[0]}
                                />
                            )
                        })
                    }

                </div>
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

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        activityDetails.map((activity) => {
                            return (
                                <Card
                                    key={activity.key}
                                    name={activity.name}
                                    location={activity.location}
                                    numberOfDays={activity.numberOfHoursRequired}
                                    image={activity.images[0]}
                                />
                            )
                        })
                    }

                </div>
            </div>

        </>
    )

}

export default UpcomingEvents;