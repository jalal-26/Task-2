// import "./Header.css";
// import { useState ,useEffect } from "react";

// function Header() {
//     const myLinks = [
//         { id: 1, name: "Home", herf: "#" },
//         { id: 2, name: "About Us", herf: "#About Us" },
//         { id: 3, name: "Academics", herf: "#Academics" },
//         { id: 4, name: "Admissions", herf: "#Admissions" },
//         { id: 5, name: "Student Life", herf: "#Student Life" },
//         { id: 6, name: "Contact", herf: "#Contact" },
//     ];
//     const [active, setActive] = useState(null);
//     const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
//     const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1440);
//     useEffect(() => {
//         function handleResize() {
//             setIsLargeScreen(window.innerWidth >= 1439);
//         }

//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);
//     return (
//         <div className="header">
//             <div className="top-banner">
//                 <div className="right-img">
//                     <img
//                         className="img-1"
//                         src="/assets/img/header1.png"
//                         alt=""
//                     />
//                 </div>
//                 <div className="up-img-2">
//                     <img
//                         className="img-2"
//                         src="/assets/img/header2.png"
//                         alt=""
//                     />
//                 </div>
//                 <div className="content">
//                     <p>Admission is Open, Grab your seat now</p>
//                     <img className="icon-1" src="/assets/img/Icon.svg" alt="" />
//                 </div>
//                 <div className="up-img-3">
//                     <img
//                         className="img-3"
//                         src="/assets/img/header3.png"
//                         alt=""
//                     />
//                 </div>
//                 <div className="left-img">
//                     <img
//                         className="img-4"
//                         src="/assets/img/header4.png"
//                         alt=""
//                     />
//                 </div>
//             </div>
//             <div className="nav-bar">
//                 <div className="logo">
//                     <img src="/assets/img/logo.svg" alt="" />
//                     <p>Little learners</p>
//                 </div>
//                 {isLargeScreen  ? (
//                     <ul className="links">
//                         {myLinks.map((link, index) => (
//                             <li
//                                 key={link.id}
//                                 className={`
//                                 ${
//                                     index === myLinks.length - 1
//                                         ? "special-link"
//                                         : ""
//                                 }
//                                 ${
//                                     index === active &&
//                                     index != myLinks.length - 1
//                                         ? "active"
//                                         : ""
//                                 }
//                                 `}
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     setActive(index);
//                                 }}
//                             >
//                                 <a href={link.herf}>{link.name}</a>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <button onClick={()=> setmobileMenuOpen(!mobileMenuOpen)} className="nav-btn">
//                         <img src="/assets/img/navBtn.svg" alt="" />
//                     </button>

//                 )}
//                 {mobileMenuOpen&&(<ul className="links-mobile">
//                         {myLinks.map((link, index) => (
//                             <li
//                                 key={link.id}
//                                 className={`
//                                 ${
//                                     index === myLinks.length - 1
//                                         ? "special-link-mobile"
//                                         : ""
//                                 }
//                                 ${
//                                     index === active &&
//                                     index != myLinks.length - 1
//                                         ? "active-mpbile"
//                                         : ""
//                                 }
//                                 `}
//                                 onClick={(e) => {
//                                     e.preventDefault();
//                                     setActive(index);
//                                     setmobileMenuOpen(false);
//                                 }}
//                             >
//                                 <a href={link.herf}>{link.name}</a>
//                             </li>
//                         ))}
//                     </ul>)}
//             </div>
//         </div>
//     );
// }

// export default Header;

import "./Header.css";
import NavBar from "./NavBar";
import TopBanner from "./TopBanner";
function Header() {
    const myLinks = [
        { id: 1, name: "Home", herf: "#" },
        { id: 2, name: "About Us", herf: "#About Us" },
        { id: 3, name: "Academics", herf: "#Academics" },
        { id: 4, name: "Admissions", herf: "#Admissions" },
        { id: 5, name: "Student Life", herf: "#Student Life" },
        { id: 6, name: "Contact", herf: "#Contact" },
    ];

    return (
        <div className="header">
            <TopBanner />
            <NavBar links={myLinks} />
        </div>
    );
}

export default Header;
