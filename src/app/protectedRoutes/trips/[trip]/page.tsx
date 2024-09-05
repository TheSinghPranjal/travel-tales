import CustomTripDetailsComponent from "@/components/TripDetails/TripDetails"
import { trips } from "@/data/data"

function TripDetail({ params }: { params: { trip: string } }) {
    const tripDetail = trips.find(t => t.id === +params.trip)
    return (
        <div>
            {/* {JSON.stringify(tripDetail)} */}
            <CustomTripDetailsComponent tripDetail={tripDetail} />
        </div>
    )
}

export default TripDetail