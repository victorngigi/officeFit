import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ProductCard from "./ProductCard";
import { toast } from "react-hot-toast";

export default function ViewProduct() {
  const [product, setProduct] = useState(null);
  const { category, productId } = useParams();
  const { dispatch } = useContext(CartContext);

  const slugToKey = {
    chairs: "chairs",
    desks: "desks",
    "conference-tables": "conferenceTables",
    "bookshelves-cabinets": "bookshelvesAndCabinets",
  };

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        const key = slugToKey[category] || category;
        const found = data[key]?.find((p) => p.id.toString() === productId);
        setProduct(found);
      });
  }, [category, productId]);

  if (!product) return null;

  return (
    <div className="min-h-screen flex justify-center items-center p-10">
      <div className="max-w-md w-full">
        <ProductCard
          product={product}
          category={category}
          disableNavigation
          onAddToCart={() => {
            dispatch({
              type: "ADD_ITEM",
              payload: {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                imageUrl: product.imageUrl,
              },
            });

            toast.success(`${product.name} added to cart`);
          }}
        />
      </div>
    </div>
  );
}
