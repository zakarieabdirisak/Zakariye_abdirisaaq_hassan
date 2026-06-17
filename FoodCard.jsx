function FoodCard({ food, addToCart }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

      <img
        src={food.image}
        alt={food.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">

        <div className="flex justify-between">

          <h2 className="font-bold text-xl">
            {food.name}
          </h2>

          <span className="text-green-600 font-bold">
            {food.price}
          </span>

        </div>

        <p className="text-gray-500 mt-3">
          ⭐ {food.rating} • {food.time}
        </p>

        <button
          onClick={() => addToCart(food)}
          className="w-full mt-5 bg-blue-900 text-white py-3 rounded-xl hover:bg-blue-700"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default FoodCard;