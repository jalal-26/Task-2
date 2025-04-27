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
