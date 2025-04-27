import Header from "./componants/Header/Header";
import "./App.css";
import Hero from "./componants/Hero/Hero";
import OurBenefits from "./componants/OurBenefits/OurBenefits";
import OutTestimonials from "./componants/OurTestimonials/OutTestimonials";
import AskedQuestions from "./componants/AskedQuestions/AskedQuestions";
import Navigate from "./componants/Navigate/Navigate";
import { footerData } from "./componants/Footer/footeData";
import Footer from "./componants/Footer/Footer";
function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="child-container">
                <Hero />
                <OurBenefits />
                <OutTestimonials />
                <AskedQuestions />   
                <Navigate />
            </div>
            <Footer data={footerData} />
        </div>
    );
}

export default App;
