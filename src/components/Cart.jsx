import { MdOutlineShoppingCart } from "react-icons/md";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { useEffect } from "react";

function Cart() {
  const { items, total } = useSelector((state) => state.cartControl);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.setTotal());
  }, [items, dispatch]);

  return (
    <>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="flex font-bold text-2xl place-items-center">
            Cart <MdOutlineShoppingCart />
            <div className="badge badge-primary badge-lg">{items.length}</div>
          </h1>
          <div className="m-1">
            {items.length === 0 ? (
              <p className="text-xl p-10 text-center">Your cart is empty!!!</p>
            ) : (
              items.map((item) => <CartItem key={item.id} item={item} />)
            )}
          </div>
          <div className="flex place-items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Sub Total: $ {total}.00</h3>
            </div>
            <div>
              <button className="btn btn-primary" disabled={items.length === 0}>
                checkout
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Cart;
