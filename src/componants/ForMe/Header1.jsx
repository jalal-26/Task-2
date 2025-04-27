import React from "react";
// import "./Header.css"; // Import the CSS file

// Placeholder for the logo icon - replace with an actual SVG or image
const LogoIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-icon"
    >
        {/* Simple placeholder shape - replace with actual logo path */}
        <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Header = () => {
    return (
        <header className="header-container">
            {/* Top Announcement Bar */}
            <div className="top-bar">
                <div className="top-bar-content">
                    {/* Decorative elements could be added via ::before/::after or background images */}
                    <span>Admission is Open , Grab your seat now →</span>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className="main-nav">
                <div className="nav-content">
                    {/* Logo Section */}
                    <div className="logo-section">
                        <LogoIcon /> {/* Render the placeholder icon */}
                        <span className="logo-text">Little Learners</span>
                    </div>

                    {/* Navigation Links */}
                    <ul className="nav-links">
                        <li>
                            <a href="#home" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="nav-link">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#academics" className="nav-link">
                                Academics
                            </a>
                        </li>
                        <li>
                            <a href="#admissions" className="nav-link">
                                Admissions
                            </a>
                        </li>
                        <li>
                            <a href="#student-life" className="nav-link">
                                Student Life
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="nav-link contact-link"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Header;

// You would typically export this component to use it in your App
// export default Header;

// For demonstration purposes in this environment, we might render it directly
// or assume it's part of a larger App component.
// If running in a standard React setup, uncomment the export line.

// Example of how to use it (if this were App.js)
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       {/* Other content */}
//     </div>
//   );
// }

// export default App;

// Note: Since we cannot render React components directly here without a full setup,
// this code provides the component structure. You'd integrate it into your React project.
// Make sure to create the Header.css file with the corresponding styles.
