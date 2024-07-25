import InformationIcon from "/icons/information.svg";
import modalStyles from "../../styles/modal-styles/work-experience.module.css";
import Modal from "./Modal";

export default function WorkExperienceModal({
  handleClose,
}: {
  handleClose: VoidFunction;
}) {
  return (
    <Modal title="Add Work Experience" onClose={handleClose}>
      <div className={modalStyles.information_wrapper}>
        <img src={InformationIcon} alt="notice" />
        <p>
          Link your NSS details to Flair to make you more credible to employers.
        </p>
        <button>Link NSS</button>
      </div>

      <form method="post" className={modalStyles.form}>
        <div>
          <label htmlFor="job-title">Job title</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="company">Company</label>
          <select>
            <option value="">Search company</option>
          </select>
        </div>

        <section className={modalStyles.divider}>
          <div>
            <label htmlFor="start-date">Start date</label>
            <input type="date" />
          </div>
          <div>
            <label htmlFor="end-date">End date</label>
            <input type="date" />
          </div>
        </section>

        <div>
          <input type="checkbox" />
          <label htmlFor="checkbox">I currently work here</label>
        </div>
      </form>
    </Modal>
  );
}
