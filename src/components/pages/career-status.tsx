import Logo from "/images/Flair logo.png";
import pageStyles from "../../styles/career.module.css";
import { useNavigate } from "react-router-dom";
export default function CareerStatusPage() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/profile-setup");
  }
  
  return (
    <>
      <header className={pageStyles.header}>
        <img src={Logo} className={pageStyles.logo} alt="logo" />
      </header>
      <main className={pageStyles.main}>
        <form method="post" className={pageStyles.form}>
          <h1>Where are you currently in your professional career?</h1>
          <button type="button">Still in school</button>
          <button type="button">Currently doing National Service</button>
          <button type="button">Done with National Service</button>
          <button type="button">Experirnced Professional</button>
          <button type="submit" onClick={handleSubmit}>Continue</button>
        </form>
      </main>
    </>
  );
}
