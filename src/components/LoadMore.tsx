import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}

export default function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=4&skip=${
          count * 10
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (products.length >= 20) setDisableButton(true);
  }, [products]);

  if (loading && products.length === 0) {
    return <div className="flex justify-center items-center h-screen text-[#606c38] font-bold">Loading products...</div>;
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center m-4 p-4 bg-[#fefae0] min-h-screen rounded-3xl">
      <h1 className="text-4xl font-extrabold text-[#283618] mt-6">Product Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {products && products.length
          ? products.map((item) => (
              <div
                className="p-4 border border-[#d4a373] flex flex-col gap-4 rounded-2xl bg-[#faedcd] shadow-sm hover:shadow-md transition-shadow"
                key={item.id}
              >
                <div className="overflow-hidden rounded-xl h-48 bg-white flex items-center justify-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-[#606c38] line-clamp-1">{item.title}</h3>
                  <p className="text-xl font-black text-[#bc6c25]">${item.price}</p>
                </div>
              </div>
            ))
          : null}
      </div>
      <div className="flex flex-col items-center gap-4 mb-8">
        <button
          disabled={disableButton}
          className={`px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform active:scale-95 ${
            disableButton
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-[#606c38] text-[#fefae0] hover:bg-[#283618] hover:shadow-xl"
          }`}
          onClick={() => setCount(count + 1)}
        >
          {loading ? "Loading..." : "Explore More Products"}
        </button>
        {disableButton ? (
          <p className="text-[#bc6c25] font-medium bg-[#faedcd] px-4 py-2 rounded-lg border border-[#d4a373]">
            ✨ You've reached the end of our collection (100 products)
          </p>
        ) : null}
      </div>
    </div>
  );
}
