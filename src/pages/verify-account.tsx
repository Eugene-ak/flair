import VerifyImage from "/images/verify.png";
import pageStyles from "../styles/page-styles/verify.module.css";
import { Link } from "react-router-dom";
import { SecondaryHeader } from "../components/molecules/Headers";

export default function VerifyAccountPage() {
  return (
    <>
      <SecondaryHeader />
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
        <Link to={"/career-status"}>Resend link</Link>
      </main>
    </>
  );
}
