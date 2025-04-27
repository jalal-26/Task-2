import TheTitle from "../TheTiltle/TheTitle";
import card1 from "../../../../my-project/public/assets/img/iconCard/card1.svg";
import card2 from "../../../../my-project/public/assets/img/iconCard/card2.svg";
import card3 from "../../../../my-project/public/assets/img/iconCard/card3.svg";
import card4 from "../../../../my-project/public/assets/img/iconCard/card4.svg";
import card5 from "../../../../my-project/public/assets/img/iconCard/card5.svg";
import card6 from "../../../../my-project/public/assets/img/iconCard/card6.svg";
import "./OurBenefits.css"
const cardInfo = [
    {
        src: card1,
        h1: "Holistic Learning Approach",
        p: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    },
    {
        src: card2,
        h1: "Experienced Educators",
        p: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    },
    {
        src: card3,
        h1: "Nurturing Environment",
        p: "We prioritize safety and provide a warm and caring atmosphere for every child.",
    },
    {
        src: card4,
        h1: "Play-Based Learning",
        p: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    },
    {
        src: card5,
        h1: "Individualized Attention",
        p: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    },
    {
        src: card6,
        h1: "Parent Involvement",
        p: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    },
];

function CardBenefits({className,key,src,h1,p}) {
    return (
        <div className={className} id={key}>
            <img src={src} alt="" />
            <h1>{h1}</h1>
            <p>{p}</p>
        </div>
    );
}

function OurBenefits() {
    return (
        <div className="our-benefits">
            <TheTitle
                themain="Our Benefits"
                thesecond="Children Deserve Bright Future"
                thethird="With a dedicated team of experienced
                    educators, state-of-the-art facilities,
                    and a comprehensive curriculum, we aim to
                    lay a strong foundation for your child's future."
            />
            <div className="card-container">
                {cardInfo.map((card, index) => (
                    <CardBenefits
                    key={index}
                    className={`card ${index+1}`}
                    src={card.src}
                    h1={card.h1}
                    p={card.p}/>
                ))
            }
            </div>
        </div>
    );
}

export default OurBenefits;
