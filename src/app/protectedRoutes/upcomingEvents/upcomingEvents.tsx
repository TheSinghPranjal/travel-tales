'use client'
import { addTripDetail } from "@/app/reduxStore/dashboardRedux/dashboardSlice";
import { useAppDispatch, useAppSelector } from "@/app/reduxStore/hooks";
import { RootState } from "@/app/reduxStore/rootReducer";
import Card from "@/components/Card/Card";
import Slider from "@/components/CustomSlider/CustomSlider";
import CustomDropdown from "@/components/Dropdown/CustomDropdown";
// import './upcomingEvents.css';
import { trips } from "@/data/data";
import { activityDetails } from "@/data/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UrlObject } from "url";
// import { sliderDetails } from "@/data/data";
// Import the fetchTripDetails action


const UpcomingEvents = () => {
    const router = useRouter();
    const itemsToShow = 6;
    const [data, setData] = useState(trips.slice(0, itemsToShow))
    const dispatch = useAppDispatch()
    const upcomingTrips = useAppSelector((store) => store.dashboardSlice.tripDetails)
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

    useEffect(() => {
        console.log(upcomingTrips);
        dispatch(addTripDetail({
            id: 2,
            name: "Goa",
            startDate: "2023-01-10",
            endDate: "2023-01-15",
            location: "Goa",
            charges: 20000,
            description: "Famous for its beaches, nightlife, and Portuguese heritage. Experience the vibrant beach culture and adventure activities.",
            activities: ["Beach parties", "Water sports", "Sightseeing", "Nightlife"],
            numberOfDays: 5,
            images: [],
            weather: "Warm",
            recommendedSeason: "Winter",
            nearbyAttractions: ["Basilica of Bom Jesus", "Dudhsagar Falls", "Anjuna Beach", "Fort Aguada"],
            transport: "Scooter, Car, Bus",
            accommodation: "Beach shack, Hotel, Resort",
            cuisine: "Goan, Seafood, Continental",
            shopping: "Cashew nuts, Feni, Handicrafts",
            localLanguage: "Konkani, English",
            bestFor: "Friends, Couples",
            safety: "Moderately safe",
            travelTips: "Beware of jellyfish, Rent a scooter"
        }))
    }, [])

    // useEffect(() => {
    //     dispatch(fetchTripDetails()); // Dispatch the action to fetch trip details
    // }, [dispatch]);

    // useEffect(() => {
    //     setData(trips.slice(0, itemsToShow)); // Update the data state when trips change
    // }, [trips]);

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
                        data.map((trip: any) => {
                            return (
                                <Link key={trip.id} href={`/protectedRoutes/trips/${trip.id}`}>
                                    <Card
                                        id={trip.id}
                                        name={trip.name}
                                        location={trip.location}
                                        numberOfDays={trip.numberOfDays}
                                        image={trip.images[0]} format_indent_increase={0} />
                                </Link>
                            )
                        })
                    }
                </div>
                {data.length < trips.length && <button style={{ color: 'blue2' }} onClick={loadMore}>+ load more</button>}
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
                                    key={activity.id}
                                    id={activity.id}
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