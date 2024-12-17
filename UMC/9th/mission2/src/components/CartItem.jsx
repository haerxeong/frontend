import React from "react";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../features/cart/cartSlice";
import { ChevronUp, ChevronDown } from "react-feather";

const dispatch = useDispatch();

const CartItem = ({ id, title, singer, price, img, amount }) => {
  return (
    <article className="cart-item">
      <div>
        <h4>
          {title} | {singer}
        </h4>
        <h4 className="item-price">₩{price}</h4>
      </div>

      <div>
        {/* 수량 증가 버튼 */}
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </button>

        {/* 수량 */}
        <p className="amount">{amount}</p>

        {/* 수량 감소 버튼 */}
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id)); // 수량이 1이면 아이템 삭제
              return;
            }
            dispatch(decrease(id)); // 수량 감소
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
