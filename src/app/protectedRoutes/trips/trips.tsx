import TrafficLight from "../homePage/TrafficLight";
import DrawerTest from "./DrawerTest";
import Test from "./Test";
import Test2 from "./Test2";
import Test3 from "./Test3";
import Test4 from "./Test4";
import Test5 from "./Test5";
import DraggableTest6 from "./Test6";
import Test8 from "./Trip8";


const Trip = () => {
    return (
        <>
            <Test />
            <h1>hellllo</h1>
            <Test2 />
            <Test3 />
            <TrafficLight />
            <div className="pb-5"></div>
            <Test4 />
            <Test5 />
            <DraggableTest6 />
            {/* <DrawerTest /> */}
            <Test8 />
        </>
    )

}

export default Trip;