import Modal from "./Modal";
import modalStyles from "../../styles/modal-styles/accomplishment.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

export default function AccomplishmentModal({
  handleClose,
}: {
  handleClose: VoidFunction;
}) {
  const [value, setValue] = useState("");

  return (
    <Modal title="Add Accomplishments" onClose={handleClose}>
      <form method="post" className={modalStyles.form}>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </form>
    </Modal>
  );
}
