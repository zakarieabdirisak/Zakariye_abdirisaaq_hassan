import { useState } from "react";
import Header from "./Componants/header";
import FoodList from "./Componants/foodList";
import Cart from "./Componants/Card"

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    const exist = cart.find((item) => item.id === food.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
  setCart((prevCart) =>
    prevCart.flatMap((item) => {
      if (item.id !== id) return item;

      if (item.quantity === 1) {
        return []; // Remove item
      }

      return {
        ...item,
        quantity: item.quantity - 1,
      };
    })
  );
};

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-6">

      <Header />

      <div className="grid md:grid-cols-4 gap-6">

        <div className="md:col-span-3">
          <FoodList addToCart={addToCart} />
        </div>

        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />

      </div>

    </div>
  );
}

export default App;