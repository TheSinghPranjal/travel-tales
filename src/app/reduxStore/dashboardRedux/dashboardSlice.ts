import { createSlice } from '@reduxjs/toolkit';
import GoaPondiImg from './../../../travel-tales/public/assets/goa.jpg'
import { DashboardState, Trip } from './dashboardType';

const dashboardInitialState: DashboardState = {
    dashboardLoader: false,
    tripDetails: [
        {
            id: 1,
            name: "Pondicherry",
            startDate: "2022-12-15",
            endDate: "2022-12-20",
            location: "Tamil Nadu",
            charges: 15000,
            description: "Pondicherry, often referred to as the 'French Riviera of the East,' is a tranquil coastal city that beautifully blends the charm of French colonial architecture with the rich cultural heritage of South India. Known for its quaint, tree-lined streets, vibrant bougainvillea-laden walls, and pristine beaches, Pondicherry offers a unique experience where you can immerse yourself in a fusion of cultures. The city is dotted with colorful markets, serene ashrams, and lively cafes that evoke a sense of peace and relaxation. Whether you are strolling along the Promenade Beach, exploring the spiritual hub of Auroville, or indulging in the delectable French and South Indian cuisine, Pondicherry provides a perfect escape from the hustle and bustle of city life. With its serene beaches, historical landmarks, and a myriad of activities, Pondicherry is an ideal destination for those seeking a blend of history, culture, and relaxation.",
            activities: ["Sightseeing", "Beach lounging", "Scuba diving", "Yoga"],
            numberOfDays: 5,
            images: [],
            weather: "Pleasant",
            recommendedSeason: "Winter",
            nearbyAttractions: ["Auroville", "Paradise Beach", "Promenade Beach", "French War Memorial"],
            transport: "Car, Bus, Train",
            accommodation: "Hotel, Resort, Homestay",
            cuisine: "French, South Indian, Continental",
            shopping: "Handicrafts, Textiles, Aromatic candles",
            localLanguage: "Tamil, English",
            bestFor: "Couples, Solo travelers",
            safety: "Safe",
            travelTips: "Carry sunscreen, Stay hydrated"
        }
    ],
};

const dashboardSlice = createSlice({
    name: 'dashboardSlice',
    initialState: dashboardInitialState,
    reducers: {
        setDashboardLoader: (state, action) => {
            state.dashboardLoader = action.payload
        },
        addTripDetail: (state, action) => {
            state.tripDetails.push(action.payload)
        },
        updateTripDetails: (state, action) => {
            state.tripDetails.map((trip: Trip) => {
                if (trip.id === action.payload.id) {
                    trip = action.payload
                }
                return trip
            })
        }
    }
})

export const { addTripDetail, setDashboardLoader, updateTripDetails } = dashboardSlice.actions
export default dashboardSlice.reducer;
