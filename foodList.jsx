import foods from "./data";
import FoodCard from "./FoodCard";

function FoodList({ addToCart }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default FoodList;