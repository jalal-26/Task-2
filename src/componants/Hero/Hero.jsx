import SubHero from "./SubHero/SubHero"
import "./Hero.css"
function Hero() {
    return (
        <div className="hero-container">
            <div className="img">
                <img src="/assets/img/HeroImage.png" alt="" />
            </div>
            <div className="info">
                <p className="welcome">Welcome to Little Learners Academy</p>
                <h1>
                    Where Young Minds Blossom and
                    <span className="special"> Dreams Take Flight.</span>
                </h1>
                <p className="information">
                    Our kinder garden school provides a nurturing and
                    stimulating environment, fostering a love for learning that
                    lasts a lifetime. Join us as we embark on an exciting
                    educational journey together!
                </p>
                <SubHero/>
            </div>
        </div>
    );
}

export default Hero;
