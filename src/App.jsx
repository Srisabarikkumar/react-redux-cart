import "./App.css";
// import products from "./products";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { MdOutlineShoppingCart } from "react-icons/md";

function App() {

  const modalDisplay = () => {
    document.getElementById("my_modal_3").showModal();
  }

  return (
    <>
      <Navbar modalDisplay={modalDisplay} />
      <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
        <div className="flex flex-col justify-center place-items-center h-96">
          <h1 className="flex text-5xl font-bold text-purple-900">
            Redux
            <MdOutlineShoppingCart />
            Cart
          </h1>
          <p className="text-2xl text-purple-800 text-center font-bold">Curated collection of electronic gadgets.</p>
        </div>
        <h1 className="text-center text-3xl font-bold text-purple-900">
          Top Brands
        </h1>
        <Products />
      </div>
    </>
  );
}

export default App;
