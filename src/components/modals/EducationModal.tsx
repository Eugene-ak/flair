import Modal from "./Modal";
import modalStyles from "../../styles/modal-styles/education.module.css";

export default function EducationModal({
  handleClose,
}: {
  handleClose: VoidFunction;
}) {
  return (
    <Modal title="Add Education" onClose={handleClose}>
      <form method="post" className={modalStyles.form}>
        <section>
          <label htmlFor="institution">Institution</label>
          <select name="institution" id="institution">
            <option value="">Search institution</option>
          </select>
        </section>
        <div className={modalStyles.divide}>
          <section>
            <label htmlFor="qualification">Qualification</label>
            <select name="qualification" id="qualification"></select>
          </section>
          <section>
            <label htmlFor="category">Course Category</label>
            <select name="category" id="category"></select>
          </section>
        </div>
        <section>
          <label htmlFor="course">Course of study</label>
          <input type="text" id="course" />
        </section>
        <div className={modalStyles.divide}>
          <section>
            <label htmlFor="start-date">Start date</label>
            <input type="date" id="start-date" />
          </section>
          <section>
            <label htmlFor="end-date">End date</label>
            <input type="date" id="end-date" />
          </section>
        </div>
      </form>
    </Modal>
  );
}
