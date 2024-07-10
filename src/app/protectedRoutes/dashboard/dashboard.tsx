import CustomCarousel from "@/components/Carousel/Carousel"
import DateTimePlaceSelection from "@/components/DateTimePlaceSelection/DateTimePlaceSelection"
import NavApp from "@/components/Navbar/Navbar"

const Dashboard = () => {
    return (
        <>
            <div style={{ position: 'relative' }}>
                <div>
                    <CustomCarousel />

                </div>

                <div style={{ position: 'absolute', bottom: '10px', zIndex: 99, height: '75px', paddingLeft: '250px' }}>
                    <DateTimePlaceSelection />

                </div>



            </div>


        </>
    )
}

export default Dashboard