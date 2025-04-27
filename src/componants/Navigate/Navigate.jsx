import "./Navigate.css";
import TheTitle from "../TheTiltle/TheTitle";
import boder from "../../../public/assets/img/borderNavigate.svg";
import right from "../../../public/assets/img/Testemonials/right.svg"

const cardInfo = [
    {
        title: "About Us",
        boder1: boder,
        text: `Discover our Mission, Values, and our unwavering
        commitment to providing the best learning
        experience for your child. Learn about our passionate educators 
        and our engaging approach to early education.`,
    },
    {
        title: "Academics",
        boder1: boder,
        text: `Delve into our comprehensive academic programs
        designed to stimulate young minds, foster creativity, and encourage a love for learning.
        Explore our well-rounded curriculum that nurtures both intellectual and social development.`,
    },
    {
        title: "Student Life",
        boder1: boder,
        text: `Peek into the vibrant and enriching world of Student
        Life at Little Learners Academy. Discover the array of extracurricular activities,
        arts and crafts, sports, and social events that make our school experience truly memorable.`,
    },
    {
        title: "Admissions",
        boder1: boder,
        text: `Admissions
        Learn about our Enrollment Process and how to
        secure your child's place at Little Learners Academy.
        Find information about our admission requirements, application
        deadlines, and available spaces.`,
    },
];

function Card() {
    return (
        <div className="cardsContainer">
            {cardInfo.map((card, index) => (
                <div className="card" key={index}>
                    <h1>{card.title}</h1>
                    <div className="border">
                        <img src={card.boder1} alt="" />
                    </div>
                    <div className="text">
                        {card.text}
                    </div>
                    <button className="learnMore">Learn More <img className="right1" src={right} alt="" /> </button>
                </div>
            ))}
        </div>
    );
}

function Navigate() {
    return (
        <div className="navidateContainer">
            <TheTitle
                themain="Navigate through our Pages"
                thesecond="Explore More"
                thethird="Your gateway to discovering a wealth of valuable
                information about our kindergarten school, Feel free to explore
                and learn more about the enriching experiences that await your child at our kindergarten school"
            />
            <Card/>
        </div>
    );
}

export default Navigate;
