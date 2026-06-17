function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum +
      Number(item.price.replace("$", "")) *
        item.quantity,
    0
  );

  return (
    <div className="bg-white rounded-3xl shadow-xl p-5 sticky top-5">

      <h2 className="text-3xl font-bold mb-6">
        🛒 Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">
          Cart is Empty
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="mb-6 border-b pb-5"
            >
              <img
                src={item.image}
                className="w-full h-36 object-cover rounded-xl"
              />

              <h3 className="font-bold mt-3">
                {item.name}
              </h3>

              <p>{item.price}</p>

              <div className="flex items-center justify-between mt-4">

                <div className="flex items-center gap-3">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    className="bg-red-500 text-white w-8 h-8 rounded-full"
                  >
                    -
                  </button>

                  <span className="font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                    className="bg-green-500 text-white w-8 h-8 rounded-full"
                  >
                    +
                  </button>

                </div>

                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
                  className="text-red-600"
                >
                  Remove
                </button>

              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold mt-5">
            Total : ${total.toFixed(2)}
          </h2>

          <button className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold">
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;