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
import pageStyles from "../../styles/profile-setup.module.css";
import { useNavigate } from "react-router-dom";

export default function ProfileSetupPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
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
                <span>Education</span>
                <img src={Circle} alt="" />
              </li>
              <li>
                <span>Work Experience</span>
                <img src={Circle} alt="" />
              </li>
              <li>
                <span>Interests & Skills</span>
                <img src={Circle} alt="" />
              </li>
              <li>
                <span>Certification</span>
                <img src={Circle} alt="" />
              </li>
              <li>
                <span>Accomplishments</span>
                <img src={Circle} alt="" />
              </li>
              <li>
                <span>Upload Resume</span>
                <img src={Circle} alt="" />
              </li>
            </ul>
          </div>

          <h1>Setup your profile</h1>

          <div className={pageStyles.setup}>
            <ul>
              <li>
                <img src={Book} alt="book" />
                <span>Education</span>
                <img src={Plus} alt="add" />
                <p>School info, field of study</p>
              </li>
              <li>
                <img src={GreenBriefcase} alt="briefcase" />
                <span>Work Experience</span>
                <img src={Plus} alt="add" />
                <p>Where you've worked your role</p>
              </li>
              <li>
                <img src={HalfStar} alt="star" />
                <span>Interests & Skills</span>
                <img src={Plus} alt="add" />
                <p>Career interests and skillset</p>
              </li>
              <li>
                <img src={Award} alt="award" />
                <span>Certification</span>
                <img src={Plus} alt="add" />
                <p>Certifications worth highlighting</p>
              </li>
              <li>
                <img src={Trophy} alt="trophy" />
                <span>Accomplishments</span>
                <img src={Plus} alt="add" />
                <p>Personal achievement & impact</p>
              </li>
              <li>
                <img src={UploadCloud} alt="upload" />
                <span>Upload Resume</span>
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
