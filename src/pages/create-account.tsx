import pageStyles from "../styles/page-styles/create-account.module.css";
import { useNavigate } from "react-router-dom";
import { SecondaryHeader } from "../components/molecules/Headers";

export default function CreateAccountPage() {
  const navigate = useNavigate();

  const handleCreateAccount = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/verify-account");
  }

  return (
    <>
      <SecondaryHeader />
      <main className={pageStyles.main}>
        <section className={pageStyles.section}>
          <h1>Get started.</h1>
          <form method="post" className={pageStyles.form}>
            <div>
              <label htmlFor="fullName">Full name</label>
              <input type="text" id="fullName" name="fullName" />
            </div>

            <div className={pageStyles.divide}>
              <div>
                <label htmlFor="dob">Date of birth</label>
                <input type="date" id="dob" name="dob" />
              </div>

              <div>
                <label htmlFor="gender">Gender</label>
                <select>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" name="email" />
            </div>

            <div>
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" name="phone" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>

            <button type="submit" onClick={handleCreateAccount}>Create account</button>
          </form>
          <div>
            <span>Already signed up? </span>
            <a href="#">Log in</a>
          </div>
        </section>
      </main>
    </>
  );
}
