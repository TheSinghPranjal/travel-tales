import CustomCarousel from "@/components/Carousel/Carousel"
import DateTimePlaceSelection from "@/components/DateTimePlaceSelection/DateTimePlaceSelection"
import NavApp from "@/components/Navbar/Navbar"
import UpcomingEvents from "../upcomingEvents/upcomingEvents"

const Dashboard = () => {
    return (
        <>
            <div className="relative">
                <div>
                    <CustomCarousel />

                </div>

                <div className="flex justify-center w-full absolute bottom-5 z-10 h-[75px]"  >
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