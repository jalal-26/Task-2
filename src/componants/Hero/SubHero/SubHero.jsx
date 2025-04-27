import "./SubHero.css"
function SubHero() {
    const myInfo = [
        { name: "Students Passed Out", number: "+7000" },
        { name: "Awards & Recognitions", number: "+37" },
        { name: "Experience Educators", number: "+15" },
    ];
    return (
        <div className="sub-hero">
            {myInfo.map((info, index) => (
                <div key={index} className="sub-h-info">
                    <span>{info.number}</span>
                    <p className="name">{info.name}</p>
                </div>
            ))}
        </div>
    );
}

export default SubHero;
