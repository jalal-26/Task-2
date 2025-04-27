import header1 from "../../../public/assets/img/header1.png"
import header2 from "../../../public/assets/img/header2.png"
import header3 from "../../../public/assets/img/header3.png"
import header4 from "../../../public/assets/img/header4.png"
import icon1    from "../../../public/assets/img/Icon.svg"     ;

function TopBanner() {
    return (
        <div className="top-banner">
            <div className="right-img">
                <img className="img-1" src={header1} alt="" />
            </div>
            <div className="up-img-2">
                <img className="img-2" src={header2} alt="" />
            </div>
            <div className="content">
                <p>Admission is Open, Grab your seat now</p>
                <img className="icon-1" src={icon1} alt="" />
            </div>
            <div className="up-img-3">
                <img className="img-3" src={header3} alt="" />
            </div>
            <div className="left-img">
                <img className="img-4" src={header4} alt="" />
            </div>
        </div>
    );
}
export default TopBanner;