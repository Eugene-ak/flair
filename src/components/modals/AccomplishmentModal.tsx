import Modal from "./Modal";
import modalStyles from "../../styles/modal-styles/accomplishment.module.css";

export default function AccomplishmentModal({
  handleClose,
}: {
  handleClose: VoidFunction;
}) {
  return <Modal title="Add Accomplishments" onClose={handleClose}>
    <form method="post" className={modalStyles.form}>
      <textarea rows={5} placeholder="Type something"></textarea>
    </form>
  </Modal>;
}
