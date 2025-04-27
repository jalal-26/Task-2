import React, { useState, useEffect } from "react";
import TheTitle from "../TheTiltle/TheTitle";
import "./OurTestimonials.css";
import person1 from "../../../public/assets/img/Testemonials/person1.png";
import person2 from "../../../public/assets/img/Testemonials/person2.png";
import person3 from "../../../public/assets/img/Testemonials/person3.png";
import star from "../../../public/assets/img/Testemonials/star.png";
import right from "../../../public/assets/img/Testemonials/right.svg";
import left from "../../../public/assets/img/Testemonials/left.svg";

const elment = star;
const length = 5;
const array = Array(length).fill(elment);

const cardInfoh = [
    {
        src: person1,
        name: "Jennifer B",
        opinin: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
        star: [...array],
    },
    {
        src: person2,
        name: "David K",
        opinin: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
        star: [...array],
    },
    {
        src: person3,
        name: "Emily L",
        opinin: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
        star: [...array],
    },
    {
        src: person1,
        name: "Jalal",
        opinin: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
        star: [...array],
    },
    {
        src: person2,
        name: "Omar",
        opinin: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
        star: [...array],
    },
    {
        src: person3,
        name: "Hasan",
        opinin: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
        star: [...array],
    },
    {
        src: person1,
        name: "khaled",
        opinin: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
        star: [...array],
    },
    {
        src: person2,
        name: "Sami",
        opinin: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
        star: [...array],
    },
    {
        src: person3,
        name: "Reem",
        opinin: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
        star: [...array],
    },
];

function CardTestimonials({ src, name, star, opinin }) {
    return (
        <div className="cardTesContainer">
            <div className="niContainer">
                <div className="img">
                    <img src={src} alt="" />
                </div>
                <div className="name">{name}</div>
            </div>
            <ul className="starcontainer">
                {star.map((str, index) => (
                    <li key={index}>
                        <img src={str} alt="" />
                    </li>
                ))}
            </ul>
            <p className="theopinin">{opinin}</p>
        </div>
    );
}

function getVisibleSlides() {
    const width = window.innerWidth;
    // {
    //     width > 1440 ? 3 : 1;
    // }
    if (width >= 1441) {
        return 3;
    } else {
        return 1;
    }
}

function OutTestimonials() {
    const [index, setIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides);
    useEffect(() => {
        const handleResize = () => {
            setVisibleSlides(getVisibleSlides);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    const nextSlide = () => {
        // setIndex((prevIndex) => (prevIndex + 1) % cardInfoh.length);
        if (index + visibleSlides >= cardInfoh.length) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index === 0) {
            setIndex(cardInfoh.length - visibleSlides);
        } else {
            setIndex(index - 1);
        }
    };

    // const getVisibleSlides = () => {
    //     const screenWidth = window.innerWidth;
    //     const slidesToShow = screenWidth > 1440 ? 3 : 1;
    //     return cardInfoh.slice(index, index + slidesToShow);
    // };
    return (
        <div className="outTestimonials">
            <TheTitle
                themain="Our Testimonials"
                thesecond="Their Happy Words 🤗"
                thethird="Our testimonials are heartfelt reflections
                of the nurturing environment we provide, 
                where children flourish both academically and emotionally."
            />
            <div className="ourtestcontainer">
                {cardInfoh
                    .slice(index, index + visibleSlides)
                    .map((card, idx) => (
                        <CardTestimonials
                            src={card.src}
                            name={card.name}
                            star={card.star}
                            opinin={card.opinin}
                            key={idx}
                        />
                    ))}
            </div>
            <button className="right" onClick={prevSlide}>
                <img src={right} alt="" />
            </button>
            <button className="left" onClick={nextSlide}>
                <img src={left} alt="" />
            </button>
        </div>
    );
}

export default OutTestimonials;
