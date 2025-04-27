import "./AskedQuestions.css";
import TheTitle from "../TheTiltle/TheTitle";
import React, { useState } from "react";

const questions = [
    {
        question: "What are the school hours at Little Learners Academy?",
        asnwer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
        question: "Is there a uniform policy for students?",
        asnwer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
        question:
            " What extracurricular activities are available for students?",
        asnwer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
        question:
            "What extracurricular activities are available for students?",
        asnwer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
        question:
            "How do you handle food allergies and dietary restrictions?",
        asnwer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
        question:
            "What is the teacher-to-student ratio at Little Learners Academy?",
        asnwer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
        question: "How do you handle discipline and behavior management?",
        asnwer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
        question:
            "How do I apply for admission to Little Learners Academy?",
        asnwer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
];
function Questions() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="upContainer">
            {questions.map((question, index) => (
                <div className={`questionsContainer ${openIndex === index ? 'open' : ''} `} key={index}>
                    <div className="question" onClick={() => toggle(index)}>
                        <p>{question.question}</p>
                        <button className="hasAnswer">
                            {openIndex === index ? "-" : "+"}
                        </button>
                    </div>
                    {openIndex === index && (
                        <div className="answer">
                            <p>{question.asnwer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
function AskedQuestions() {
    return (
        <div className="askedQuestions">
            <TheTitle
                themain="Frequently Asked Questions"
                thesecond="Solutions For The Doubts"
                thethird="Find all the essential information you need 
                in our FAQ section, designed to address the most frequently
                asked questions and help you make informed decisions for your child's education."
            />
            <Questions/>
        </div>
    );
}
export default AskedQuestions;


