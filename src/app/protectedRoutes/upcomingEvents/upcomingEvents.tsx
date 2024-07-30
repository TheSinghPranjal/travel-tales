'use client'
import Card from "@/components/Card/Card";
import CustomDropdown from "@/components/Dropdown/CustomDropdown";
// import './upcomingEvents.css';
import GoaImg from './../../../../public/assets/goa.jpg'
import GoaPondiImg from './../../../../public/assets/pondi.png'
import { circleData } from "@/data/data";


const UpcomingEvents = () => {

    const trips = [
        {
            key: 1,
            name: "Pondicherry",
            startDate: "2022-12-15",
            endDate: "2022-12-20",
            location: "Tamil Nadu",
            charges: 15000,
            description: "A serene coastal city with French colonial architecture and beautiful beaches.",
            activities: ["Sightseeing", "Beach lounging", "Scuba diving", "Yoga"],
            numberOfDays: 5,
            images: [
                GoaImg,
                // "https://www.shutterstock.com/image-vector/pondicherry-puducherry-india-beach-promenade-600nw-595423316.jpg"
            ],
            weather: "Pleasant",
            recommendedSeason: "Winter",
            nearbyAttractions: ["Auroville", "Paradise Beach"]
        },
        {
            key: 2,
            name: "Goa",
            startDate: "2023-01-10",
            endDate: "2023-01-15",
            location: "Goa",
            charges: 20000,
            description: "Famous for its beaches, nightlife, and Portuguese heritage.",
            activities: ["Beach parties", "Water sports", "Sightseeing", "Nightlife"],
            numberOfDays: 5,
            images: [GoaPondiImg],
            weather: "Warm",
            recommendedSeason: "Winter",
            nearbyAttractions: ["Basilica of Bom Jesus", "Dudhsagar Falls"]
        },
        {
            key: 3,
            name: "Manali",
            startDate: "2023-02-05",
            endDate: "2023-02-10",
            location: "Himachal Pradesh",
            charges: 18000,
            description: "A high-altitude Himalayan resort town known for its adventure activities.",
            activities: ["Trekking", "Skiing", "Paragliding", "Rafting"],
            numberOfDays: 5,
            images: [
                GoaImg,
                // "https://www.shutterstock.com/image-vector/pondicherry-puducherry-india-beach-promenade-600nw-595423316.jpg"
            ],
            weather: "Cold",
            recommendedSeason: "Winter",
            nearbyAttractions: ["Rohtang Pass", "Solang Valley"]
        },
        {
            key: 4,
            name: "Jaipur",
            startDate: "2023-03-15",
            endDate: "2023-03-20",
            location: "Rajasthan",
            charges: 12000,
            description: "The Pink City, known for its historical forts, palaces, and vibrant culture.",
            activities: ["Sightseeing", "Shopping", "Cultural tours", "Camel riding"],
            numberOfDays: 5,
            images: [
                GoaImg,
                // "https://www.shutterstock.com/image-vector/pondicherry-puducherry-india-beach-promenade-600nw-595423316.jpg"
            ],
            weather: "Warm",
            recommendedSeason: "Winter",
            nearbyAttractions: ["Amber Fort", "Hawa Mahal"]
        },
        {
            key: 5,
            name: "Kerala",
            startDate: "2023-04-10",
            endDate: "2023-04-15",
            location: "Kerala",
            charges: 22000,
            description: "Known for its backwaters, houseboats, and lush greenery.",
            activities: ["Backwater cruises", "Ayurvedic treatments", "Sightseeing", "Beach activities"],
            numberOfDays: 5,
            images: [
                GoaImg,
                // "https://www.shutterstock.com/image-vector/pondicherry-puducherry-india-beach-promenade-600nw-595423316.jpg"
            ],
            weather: "Humid",
            recommendedSeason: "Winter",
            nearbyAttractions: ["Munnar", "Alleppey Backwaters"]
        },
        {
            key: 6,
            name: "Ladakh",
            startDate: "2023-05-05",
            endDate: "2023-05-15",
            location: "Jammu & Kashmir",
            charges: 30000,
            description: "A high desert city in the Himalayas, known for its Buddhist monasteries and adventure activities.",
            activities: ["Motorbiking", "Trekking", "Monastery visits", "Camping"],
            numberOfDays: 10,
            images: [
                GoaImg,
                // "https://www.shutterstock.com/image-vector/pondicherry-puducherry-india-beach-promenade-600nw-595423316.jpg"
            ],
            weather: "Cold",
            recommendedSeason: "Summer",
            nearbyAttractions: ["Pangong Lake", "Nubra Valley"]
        },
        {
            key: 7,
            name: "Rishikesh",
            startDate: "2023-06-10",
            endDate: "2023-06-15",
            location: "Uttarakhand",
            charges: 14000,
            description: "A city in the Himalayan foothills, known as the Yoga Capital of the World.",
            activities: ["Yoga retreats", "Rafting", "Camping", "Sightseeing"],
            numberOfDays: 5,
            images: [
                GoaImg,
                // "https://www.shutterstock.com/image-vector/pondicherry-puducherry-india-beach-promenade-600nw-595423316.jpg"
            ],
            weather: "Pleasant",
            recommendedSeason: "Spring",
            nearbyAttractions: ["Lakshman Jhula", "Neelkanth Mahadev Temple"]
        },
        {
            key: 8,
            name: "Udaipur",
            startDate: "2023-07-05",
            endDate: "2023-07-10",
            location: "Rajasthan",
            charges: 13000,
            description: "The City of Lakes, known for its palaces, lakes, and royal heritage.",
            activities: ["Boat rides", "Sightseeing", "Cultural tours", "Shopping"],
            numberOfDays: 5,
            images: [
                GoaImg,
                // "https://www.shutterstock.com/image-vector/pondicherry-puducherry-india-beach-promenade-600nw-595423316.jpg"
            ],
            weather: "Hot",
            recommendedSeason: "Winter",
            nearbyAttractions: ["City Palace", "Lake Pichola"]
        },
        {
            key: 9,
            name: "Darjeeling",
            startDate: "2023-08-15",
            endDate: "2023-08-20",
            location: "West Bengal",
            charges: 16000,
            description: "A town in the Himalayas, known for its tea plantations and scenic views.",
            activities: ["Tea plantation tours", "Sightseeing", "Trekking", "Toy train rides"],
            numberOfDays: 5,
            images: [
                GoaImg,
                // "https://www.shutterstock.com/image-vector/pondicherry-puducherry-india-beach-promenade-600nw-595423316.jpg"
            ],
            weather: "Cool",
            recommendedSeason: "Spring",
            nearbyAttractions: ["Tiger Hill", "Batasia Loop"]
        },
        {
            key: 10,
            name: "Andaman and Nicobar Islands",
            startDate: "2023-09-10",
            endDate: "2023-09-20",
            location: "Andaman and Nicobar Islands",
            charges: 35000,
            description: "A group of islands known for their pristine beaches, coral reefs, and marine life.",
            activities: ["Scuba diving", "Snorkeling", "Beach activities", "Sightseeing"],
            numberOfDays: 10,
            images: [
                GoaImg,
                // "https://www.shutterstock.com/image-vector/pondicherry-puducherry-india-beach-promenade-600nw-595423316.jpg"
            ],
            weather: "Tropical",
            recommendedSeason: "Winter",
            nearbyAttractions: ["Radhanagar Beach", "Cellular Jail"]
        }
    ];

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
                />

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

        </>
    )

}

export default UpcomingEvents;