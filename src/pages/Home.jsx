import AboutUs from "../components/home/AboutUs";
import Feedback from "../components/home/Feedback";
import FutureBegins from "../components/home/FutureBegins";
import OurCoffeeBeans from "../components/home/OurCoffeeBeans";
import WhatsNew from "../components/home/WhatsNew";
import WhatToKnow from "../components/home/WhatToKnow";

const Home = () => {
    return (
        <main className="mx-5">
            <FutureBegins />
            <WhatsNew />
            <AboutUs />
            <WhatToKnow />
            <OurCoffeeBeans />
            <Feedback />
        </main>
    )
}

export default Home;