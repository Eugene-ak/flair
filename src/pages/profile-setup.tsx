import Logo from "/images/Flair logo.png";
import Indicator from "/images/indicator.png";
import Circle from "/icons/circle.svg";
import Plus from "/icons/Add.svg";
import Book from "/icons/book.svg";
import GreenBriefcase from "/icons/green-briefcase.svg";
import HalfStar from "/icons/star-half.svg";
import Award from "/icons/award.svg";
import Trophy from "/icons/trophy.svg";
import UploadCloud from "/icons/upload-cloud.svg";
import pageStyles from "../styles/page-styles/profile-setup.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import WorkExperienceModal from "../components/modals/WorkExperienceModal";

export default function ProfileSetupPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    navigate("/");
  }

  const openModal = () => {
    setIsModalOpen(true);
  }
  
  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <header className={pageStyles.header}>
        <img src={Logo} className={pageStyles.logo} alt="logo" />
      </header>
      <main className={pageStyles.main}>
        <section className={pageStyles.section}>
          <div className={pageStyles.summary}>
            <div>
              <h1>
                Profile
                <br /> Completion
              </h1>
              <img src={Indicator} alt="" />
            </div>
            <ul>
              <li>
                <h3>Education</h3>
                <img src={Circle} alt="" />
              </li>
              <li>
                <h3>Work Experience</h3>
                <img src={Circle} alt="" />
              </li>
              <li>
                <h3>Interests & Skills</h3>
                <img src={Circle} alt="" />
              </li>
              <li>
                <h3>Certification</h3>
                <img src={Circle} alt="" />
              </li>
              <li>
                <h3>Accomplishments</h3>
                <img src={Circle} alt="" />
              </li>
              <li>
                <h3>Upload Resume</h3>
                <img src={Circle} alt="" />
              </li>
            </ul>
          </div>

          <h1>Setup your profile</h1>

          <div className={pageStyles.setup}>
            <ul>
              <li>
                <img src={Book} alt="book" />
                <h3>Education</h3>
                <img src={Plus} alt="add" />
                <p>School info, field of study</p>
              </li>
              <li>
                <img src={GreenBriefcase} alt="briefcase" />
                <h3>Work Experience</h3>
                <img src={Plus} alt="add" onClick={openModal} />
                <p>Where you've worked your role</p>
                {isModalOpen && <WorkExperienceModal onClose={closeModal} />}
              </li>
              <li>
                <img src={HalfStar} alt="star" />
                <h3>Interests & Skills</h3>
                <img src={Plus} alt="add" />
                <p>Career interests and skillset</p>
              </li>
              <li>
                <img src={Award} alt="award" />
                <h3>Certification</h3>
                <img src={Plus} alt="add" />
                <p>Certifications worth highlighting</p>
              </li>
              <li>
                <img src={Trophy} alt="trophy" />
                <h3>Accomplishments</h3>
                <img src={Plus} alt="add" />
                <p>Personal achievement & impact</p>
              </li>
              <li>
                <img src={UploadCloud} alt="upload" />
                <h3>Upload Resume</h3>
                <img src={Plus} alt="add" />
                <p>CV, portfolio</p>
              </li>
            </ul>
            <div className={pageStyles.btn_group}>
              <button onClick={handleClick}>I'll do it later</button>
              <button onClick={handleClick}>Done</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
