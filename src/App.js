import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getcartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getcartItems())
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
       <h4> Loading...</h4>
      </div>
    )
  }
  
  return <main>
   {isOpen && <Modal />} 
    <Navbar />
    <CartContainer />
  </main>;
}
export default App;
