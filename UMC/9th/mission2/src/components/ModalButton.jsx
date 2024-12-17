import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const ModalButton = () => {
  const dispatch = useDispatch();
  //   const {isOpen} = useSelector((state) => state.modal);
  return (
    <div className="btn-container">
      <button
        type="button"
        className="btn confirm-btn"
        onClick={() => {
          dispatch(clearCart());
          //TODO: 모달을 닫는 함수를 호출해야 합니다.
          dispatch(closeModal());
        }}
      >
        네
      </button>
      <button
        type="button"
        className="btn clear-btn"
        onClick={() => {
          //TODO: 모달을 닫는 함수를 호출해야 합니다.
          dispatch(closeModal());
        }}
      >
        아니오
      </button>
    </div>
  );
};

export default ModalButton;
