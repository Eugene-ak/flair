import CandidateImage from "/images/candidate.png";
import EmployerImage from "/images/employer.png";
import MentorImage from "/images/mentor.png";
import TrainerImage from "/images/trainer.png";
import RightArrow from "/icons/Arrow-right.png";
import pageStyles from "../styles/page-styles/account-type.module.css";
import { Link } from "react-router-dom";
import { SecondaryHeader } from "../components/molecules/Headers";

export default function AccountTypePage() {
  return (
    <>
      <SecondaryHeader />
      <main className={pageStyles.main}>
        <section className={pageStyles.section}>
          <h1>What type of account are you setting up?</h1>
          <section className={pageStyles.grid_wrapper}>
            <div>
              <img src={CandidateImage} alt="candidate" />
              <h2>Candidate</h2>
              <p>A graduate looking for an employment opportunity</p>
            </div>
            <div>
              <img src={EmployerImage} alt="employer" />
              <h2>Employer</h2>
              <p>An organisation looking to hire top talents</p>
            </div>
            <div>
              <img src={MentorImage} alt="mentor" />
              <h2>Mentor</h2>
              <p>A professional helping others navigate their careers</p>
            </div>
            <div>
              <img src={TrainerImage} alt="trainer" />
              <h2>Trainer</h2>
              <p>An organisation offering training programmes</p>
            </div>
          </section>
          <Link to={"/create-account"} className={pageStyles.link}>
            <span>Next</span>
            <img src={RightArrow} alt="" />
          </Link>
        </section>
      </main>
    </>
  );
}
