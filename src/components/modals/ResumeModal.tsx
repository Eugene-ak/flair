import Modal from "./Modal";
import modalStyles from "../../styles/modal-styles/resume.module.css";

export default function ResumeModal({
  handleClose,
}: {
  handleClose: VoidFunction;
}) {
  return (
    <Modal title="Upload Resume" onClose={handleClose}>
      <form method="post" className={modalStyles.form}>
        <section className={modalStyles.section}>
          <label>
            <span>Resume/CV</span>
            <span>Format should be either .pdf, .docx, .doc</span>
          </label>
          <input type="file" />
        </section>

        <section className={modalStyles.section}>
          <label>
            <span>Other file e.g portfolio</span>
            <span>Format should be either .pdf, .docx, .doc</span>
          </label>
          <input type="file" />
        </section>
      </form>
    </Modal>
  );
}
