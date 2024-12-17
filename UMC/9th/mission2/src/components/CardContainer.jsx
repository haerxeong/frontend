import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import CardItem from "./CardItem";

const CardContainer = () => {
  const dispatch = useDispatch(); // Redux dispatch 가져오기
  const { cardItems, total } = useSelector((store) => store.cart); // Redux 스토어에서 상태 가져오기

  // 장바구니가 비어있을 경우 메시지 표시
  if (cardItems.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>장바구니</h2>
          <h4 className="empty-cart">장바구니가 비어있습니다.</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>장바구니</h2>
      </header>
      <div>
        {cardItems.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            총 금액 <span>₩{total}원</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModel());
          }}
        >
          장바구니 초기화
        </button>
      </footer>
    </section>
  );
};

export default CardContainer;
