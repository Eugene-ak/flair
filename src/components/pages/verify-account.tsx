import Logo from "/images/Flair logo.png";
import VerifyImage from "/images/verify.png";
import pageStyles from "../../styles/verify.module.css";

export default function VerifyAccountPage() {
  return (
    <>
      <header className={pageStyles.header}>
        <img src={Logo} className={pageStyles.logo} alt="logo" />
      </header>
      <main className={pageStyles.main}>
        <img
          src={VerifyImage}
          className={pageStyles.verify_img}
          alt="verify image"
        />
        <h1>Verify your account</h1>
        <p>
          A verification email will be sent to your email address provided.
          Click on the link in the mail to verify your account.
        </p>
        <p>mic***@inpathgroup.africa</p>
        <button>Resend link</button>
      </main>
    </>
  );
}
