import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice.jsx";
import {
  ButtonContainer,
  ConfirmButton,
  CancelButton,
} from "./ModalButton.style";

const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <ButtonContainer>
      <ConfirmButton
        type="button"
        onClick={() => {
          dispatch(clearCart());
          // TODO: 모달도 꺼지는 상태를 연결
        }}
      >
        네
      </ConfirmButton>
      <CancelButton type="button" onClick={() => {}}>
        아니요
      </CancelButton>
    </ButtonContainer>
  );
};

export default ModalButton;
