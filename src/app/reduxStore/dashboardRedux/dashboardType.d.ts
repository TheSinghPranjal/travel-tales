import { StaticImageData } from "next/image";

interface Trip {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    location: string;
    charges: number;
    description: string;
    activities: string[];
    numberOfDays: number;
    images: Array<string | StaticImageData>; // Assuming GoaPondiImg is a string representing the image URL or file path
    weather: string;
    recommendedSeason: string;
    nearbyAttractions: string[];
    transport: string;
    accommodation: string;
    cuisine: string;
    shopping: string;
    localLanguage: string;
    bestFor: string;
    safety: string;
    travelTips: string;
}


type DashboardState = {
    tripDetails: Trip[]
    dashboardLoader: boolean;
}

type DashboardAction = {
    tripDetails: Trip[]
    dashboardLoader: boolean,
    type: string,

}