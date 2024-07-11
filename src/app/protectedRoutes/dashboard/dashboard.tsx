import CustomCarousel from "@/components/Carousel/Carousel"
import DateTimePlaceSelection from "@/components/DateTimePlaceSelection/DateTimePlaceSelection"
import NavApp from "@/components/Navbar/Navbar"
import UpcomingEvents from "../upcomingEvents/upcomingEvents"

const Dashboard = () => {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <div>
                    <CustomCarousel />

                </div>

                <div style={{ position: 'absolute', bottom: '20px', zIndex: 99, height: '75px', paddingLeft: '260px' }}>
                    <DateTimePlaceSelection />
                </div>
            </div>

            <div>
                <UpcomingEvents />
            </div>


        </>
    )
}

export default Dashboard