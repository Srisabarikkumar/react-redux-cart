/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";

function Product({ product }) {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cartControl);

  const isInCart = () =>
    product && items.some((item) => item.id === product.id);

  const handleClick = () =>
    isInCart()
      ? dispatch(cartActions.removeFromCart(product))
      : dispatch(cartActions.addToCart(product));

  return (
    <div className="card xl:card-side lg:card-side md:card-side bg-base-100 transition-shadow hover:shadow-neutral hover:shadow-2xl ">
      <figure>
        <img src={product.image} alt={product.brand} />
      </figure>
      <div className="card-body text-white bg-gradient-to-r from-gray-500 via-slate-500-500 to-gray-400">
        <div className="flex justify-start mb-2">
          <div className="badge badge-secondary badge-outline mx-1">
            {product.category}
          </div>
          <div className="badge badge-accent badge-outline mx-1">
            {product.brand}
          </div>
        </div>
        <h2 className="card-title font-bold w-96">
          {product.title}
          <div className="badge badge-primary">In stock: {product.stock}</div>
        </h2>
        <p>{product.description}</p>
        <div className="flex justify-start place-items-center">
          <div className="mr-3">
            <p>
              <strong>$ </strong>
              {product.price}/-{" "}
            </p>
          </div>

          <div className="badge badge-primary font-bold">
            {product.discountPercentage}% off
          </div>
        </div>

        <div className="card-actions flex place-items-center justify-between">
          <div className="flex place-items-center">
            <p className="mr-1">Rating:</p>{" "}
            <div className="place-items-center rating rating-sm">
              <input className="mask mask-star-2 bg-orange-400" />
              <input className="mask mask-star-2 bg-orange-400" />
              <input className="mask mask-star-2 bg-orange-400" />
              <input className="mask mask-star-2 bg-orange-400" />
              <input className="mask mask-star-2" />
              <p className="ml-1">{product.rating}</p>
            </div>
          </div>
          <button
            onClick={handleClick}
            className={isInCart() ? `btn btn-error` : "btn btn-primary"}
          >
            {isInCart() ? "Remove from cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
