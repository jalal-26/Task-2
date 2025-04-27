import "./TheTitle.css"
function TheTitle({ themain, thesecond, thethird }) {
    return (
        <div className="title-container">
            <div className="the-second">{thesecond}</div>
            <h1 className="the-main">{themain}</h1>
            <p className="the-third">{thethird}</p>
        </div>
    );
}

export default TheTitle;
