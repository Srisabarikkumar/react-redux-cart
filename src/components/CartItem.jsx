/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="">
        <div className="card card-side gap-2 mt-3 mb-3 text-white bg-gradient-to-r from-gray-500 via-slate-500-500 to-gray-400">
          <figure>
            <img src={item.image} className="w-20 h-20" alt="Movie" />
          </figure>
          <section className="flex w-3/4 justify-between place-items-center">
            <div className="">
              <h2 className="card-title font-bold text-xl">{item.title}</h2>
              <p className="text-lg">$ {item.price}.00</p>
            </div>

            <div className="flex place-items-center gap-4">
              <button
                onClick={
                  item.quantity <= 1
                    ? () => dispatch(cartActions.removeFromCart(item))
                    : () => dispatch(cartActions.decreaseQuantity(item))
                }
                className="btn btn-error rounded-full text-white font-bold text-xl w-12"
              >
                -
              </button>
              <p className="font-bold">{item.quantity}</p>
              <button
                onClick={() => dispatch(cartActions.increaseQuantity(item))}
                className="btn btn-primary rounded-full text-white font-bold text-xl w-12"
              >
                +
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CartItem;
