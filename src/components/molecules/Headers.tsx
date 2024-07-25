import Logo from "/images/Flair logo.png";
import Briefcase from "/icons/briefcase.svg";
import UserStar from "/icons/user-star.svg";
import TrainingImage from "/icons/Training.png";
import Hamburger from "/icons/menu.png";
import { Link } from "react-router-dom";
import headerStyles from "../../styles/component-styles/header.module.css";
import { useState } from "react";

export function PrimaryHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className={headerStyles.primary_header}>
      <img src={Logo} alt="logo" />
      <nav className={headerStyles.desktop_nav}>
        <ul>
          <li>
            <img src={Briefcase} alt="briefcase" />
            <span>Jobs</span>
          </li>
          <li>
            <img src={UserStar} alt="user" />
            <span>Mentorship</span>
          </li>
          <li>
            <img src={TrainingImage} alt="training" />
            <span>Trainings</span>
          </li>
        </ul>
      </nav>
      {isMobileNavOpen && (
        <nav className={headerStyles.mobile_nav}>
          <ul>
            <li>
              <img src={Briefcase} alt="briefcase" />
              <span>Jobs</span>
            </li>
            <li>
              <img src={UserStar} alt="user" />
              <span>Mentorship</span>
            </li>
            <li>
              <img src={TrainingImage} alt="training" />
              <span>Trainings</span>
            </li>
          </ul>
          <div>
            <Link to={"/account-type"}>Log in</Link>
            <Link to={"/account-type"}>Sign up</Link>
          </div>
        </nav>
      )}
      <div>
        <Link to={"/account-type"}>Log in</Link>
        <Link to={"/account-type"}>Sign up</Link>
      </div>
      <img
        src={Hamburger}
        className={headerStyles.menu_icon}
        alt=""
        title="Menu"
        onClick={handleMobileNav}
      />
    </header>
  );
}

export function SecondaryHeader() {
  return (
    <header className={headerStyles.secondary_header}>
      <img src={Logo} alt="logo" />
    </header>
  );
}
