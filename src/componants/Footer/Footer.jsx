import React from "react";
import gmail from "../../../public/assets/img/footerIcon/gmail.svg";
import phone from "../../../public/assets/img/footerIcon/phone.svg";
import location from "../../../public/assets/img/footerIcon/location.svg";

import facebook from "../../../public/assets/img/footerIcon/facebook.svg";

import x from "../../../public/assets/img/footerIcon/X.svg";
import linkedIn from "../../../public/assets/img/footerIcon/linkedIn.svg";
import logo from "../../../public/assets/img/logo.svg";
import "./Footer.css";

const Footer = ({ data }) => {
    const { companyInfo, mainLinks, legalLinks, copyright } = data;

    return (
        <footer className="footer">
            <div className="footer-main-content">
                {/* قسم العلامة التجارية */}
                <div className="brand-section">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <h3>{companyInfo.name}</h3>
                    </div>
                    <p className="description">{companyInfo.description}</p>
                    <div className="contact-info">
                        <div className="upgmail">
                        <div className="gmail"><img src={gmail} alt="" /></div>
                            <p>{companyInfo.contact.email}</p>
                        </div>
                        <div className="upphone">
                            <div className="phone"><img src={phone} alt="" /></div>
                            <p>{companyInfo.contact.phone}</p>
                        </div>
                        <div className="uplocation">
                            <div className="location"><img src={location} alt="" /></div>
                            <p>{companyInfo.contact.address}</p>
                        </div>
                    </div>
                </div>
                <div className="main-links">
                    {mainLinks.map((section, index) => (
                        <div key={index} className="link-column">
                            <h4>{section.title}</h4>
                            <ul>
                                {section.items.map((item, idx) => (
                                    <li key={idx}>
                                        <a href="#">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="legal-section">
                <div className="linksAndSocial">
                    <div className="legal-links">
                        {legalLinks.map((link, index) => (
                        <React.Fragment key={index}>
                            <a href="#">{link}</a>
                            {index < legalLinks.length - 1 && <span> | </span>}
                        </React.Fragment>
                    ))}
                    </div>
                    <div className="socialMidia">
                        <div className="facebook">
                            <img src={facebook} alt="" />
                        </div>
                        <div className="x">
                            <img src={x} alt="" />
                        </div>
                        <div className="linkedIn">
                            <img src={linkedIn} alt="" />
                        </div>
                    </div>
                </div>
                <p className="copyright">{copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;
