import Card from "@/components/Card/Card";


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
                "https://w0.peakpx.com/wallpaper/360/482/HD-wallpaper-pondicherry-harbour-rock-waves-sea-beach-india-pondicherry-graphy-sunrise-morning-harbor.jpg",
                "https://www.shutterstock.com/image-vector/pondicherry-puducherry-india-beach-promenade-600nw-595423316.jpg"
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
            images: ["https://www.shutterstock.com/image-vector/pondicherry-puducherry-india-beach-promenade-600nw-595423316.jpg", "goa2.jpg"],
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
            images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiMVquw-b6jSPOLDlgl_QuomkyfN1hmflZ5Vj5p_bRus2hr4yO6D3XRH1boSkn3mb__IA&usqp=CAU",
                "manali2.jpg"],
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
            images: ["jaipur1.jpg", "jaipur2.jpg"],
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
            images: ["kerala1.jpg", "kerala2.jpg"],
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
            images: ["ladakh1.jpg", "ladakh2.jpg"],
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
            images: ["rishikesh1.jpg", "rishikesh2.jpg"],
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
            images: ["udaipur1.jpg", "udaipur2.jpg"],
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
            images: ["darjeeling1.jpg", "darjeeling2.jpg"],
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
            images: ["andaman1.jpg", "andaman2.jpg"],
            weather: "Tropical",
            recommendedSeason: "Winter",
            nearbyAttractions: ["Radhanagar Beach", "Cellular Jail"]
        }
    ];

    return (
        <>

            Upcoming Trips

            <div>
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

        </>
    )

}

export default UpcomingEvents;