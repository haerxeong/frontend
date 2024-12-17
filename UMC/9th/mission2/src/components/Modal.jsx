import ModalButton from "./ModalButton";

const Modal = ({ children }) => {
  return (
    <aside className="modal-containder" onClick={(e) => {}}>
      <div className="modal">
        {children}
        <ModalButton />
      </div>
    </aside>
  );
};

export default Modal;
