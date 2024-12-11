import { useSelector } from "react-redux";
import Product from "./Product";


function Products() {
  const { products } = useSelector(state => state.cartControl);

  return (
    <div className="flex justify-center">
      <div className="container flex justify-center m-10">
        <div className="grid grid-flow-row xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 mb-5 gap-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
