import { createPortal } from "react-dom";
import CloseIcon from "/icons/close.svg";
import modalStyles from "../../styles/modal-styles/modal.module.css";

export default function Modal({
  onClose,
  title,
  children
}: {
  onClose: VoidFunction;
  title: string;
  children: React.ReactNode;
}) {
  return createPortal(
    <div id="modal-overlay">
      <section className={modalStyles.wrapper}>
        <header className={modalStyles.header}>
          <h1>{title}</h1>
          <img src={CloseIcon} alt="close" title="Close" onClick={onClose} />
        </header>

        {children}

        <footer className={modalStyles.footer}>
          <button>Save</button>
        </footer>
      </section>
    </div>,
    document.getElementById("modal-root")!
  );
}
