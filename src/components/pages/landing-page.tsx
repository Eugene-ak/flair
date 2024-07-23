import Logo from "/images/Flair logo.png";
import Briefcase from "/icons/briefcase.svg";
import UserStar from "/icons/user-star.svg";
import TrainingImage from "/icons/Training.png";
import SearchIcon from "/icons/Search.svg";
import RightArrow from "/icons/Arrow-right.png";
import Image1 from "/images/hero-image-1.png";
import Image2 from "/images/hero-image-2.png";
import Image3 from "/images/hero-image-3.png";
import Image4 from "/images/hero-image-4.png";
import Image5 from "/images/hero-image-5.png";
import Image6 from "/images/hero-image-6.png";
import Image7 from "/images/hero-image-7.png";
import Image8 from "/images/hero-image-8.png";
import PencilSketch from "/images/pencil-sketch.png";
import pageStyles from "../../styles/landing-page.module.css";

export default function LandingPage() {
  return (
    <>
      <div className={pageStyles.top_container}>
        <div>
          <button>For Students & Graduates</button>
          <button>For Partners</button>
        </div>
      </div>
      <header className={pageStyles.header}>
        <img src={Logo} alt="logo" />
        <nav>
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
        <div>
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </header>

      <main className={pageStyles.main}>
        <section>
          <img src={Image1} className={pageStyles.bg_image} alt="" />
          <img src={Image2} className={pageStyles.bg_image} alt="" />
          <img src={Image3} className={pageStyles.bg_image} alt="" />
          <img src={Image4} className={pageStyles.bg_image} alt="" />
          <img src={Image5} className={pageStyles.bg_image} alt="" />
          <img src={Image6} className={pageStyles.bg_image} alt="" />
          <img src={Image7} className={pageStyles.bg_image} alt="" />
          <img src={Image8} className={pageStyles.bg_image} alt="" />
          <img src={PencilSketch} className={pageStyles.bg_image} alt="" />
          <h1>Discover a greater you</h1>
          <p>
            We help you <span>find the perfect job</span>
          </p>
          <div>
            <div className={pageStyles.search_group}>
              <button>
                <img
                  src={SearchIcon}
                  className={pageStyles.search_icon}
                  alt="search"
                />
              </button>
              <input type="text" placeholder='Try "Civil engineering"' />
            </div>
            <select name="" id="">
              <option value="jobs">Jobs</option>
              <option value="mentorships">Mentorships</option>
              <option value="trainings">Trainings</option>
            </select>
            <button>
              <img
                src={RightArrow}
                className={pageStyles.arrow_img}
                alt="arrow"
              />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
