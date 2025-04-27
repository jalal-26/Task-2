import logo from "../../../public/assets/img/logo.svg"
import navBtn from "../../../public/assets/img/navBtn.svg"
import { useState, useEffect } from "react";
function NavBar({ links }) {
    const [active, setActive] = useState(null);
    const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(
        window.innerWidth >= 1440
    );

    useEffect(() => {
        function handleResize() {
            setIsLargeScreen(window.innerWidth >= 1439);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="nav-bar">
            <div className="logo">
                <img src={logo} alt="" />
                <p>Little learners</p>
            </div>
            {isLargeScreen ? (
                <ul className="links">
                    {links.map((link, index) => (
                        <li
                            key={link.id}
                            className={`
                    ${index === links.length - 1 ? "special-link" : ""}
                    ${
                        index === active && index !== links.length - 1
                            ? "active"
                            : ""
                    }
                `}
                            onClick={(e) => {
                                e.preventDefault();
                                setActive(index);
                            }}
                        >
                            <a href={link.herf}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <button
                    onClick={() => setmobileMenuOpen(!mobileMenuOpen)}
                    className="nav-btn"
                >
                    <img src={navBtn} alt="" />
                </button>
            )}
            {mobileMenuOpen && (
                <ul className="links-mobile">
                    {links.map((link, index) => (
                        <li
                            key={link.id}
                            className={`
                    ${index === links.length - 1 ? "special-link-mobile" : ""}
                    ${
                        index === active && index !== links.length - 1
                            ? "active-mpbile"
                            : ""
                    }
                `}
                            onClick={(e) => {
                                e.preventDefault();
                                setActive(index);
                                setmobileMenuOpen(false);
                            }}
                        >
                            <a href={link.herf}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default NavBar;