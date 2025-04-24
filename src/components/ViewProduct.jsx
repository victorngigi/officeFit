import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ViewProduct() {
	const [product, setProduct] = useState({});
	const { productId } = useParams();

	// fetch products depending on the product id
	useEffect(() => {
		fetch(`  http://localhost:3000/${productId}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, [productId]);

	return (
		<div className="h-screen flex justify-center items-center max-w-5xl">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
				{/* display the product image */}
				<div className="col-span-1">
					<img
						src={product.image}
						alt={product.title}
						className="w-full h-full object-cover object-top"
					/>
				</div>
				{/* display the product details */}
				<div className="col-span-1">
					<div className="p-5 flex flex-col gap-3">
						<h2 className="font-mono text-4xl font-bold ">
							{product.title}
						</h2>
						<div className="bg-orange-500/[0.15] text-orange-500 px-2 rounded-sm w-fit text-font-medium">
							{product.category}
						</div>
						<p className="font-medium text-gray-600 text-lg ">
							{product.description}
						</p>
					</div>

					{/* price and rating */}
					<div className="flex justify-between items-center p-5">
						<h4 className="text-2xl font-bold font-mono">
							$ {product.price}
						</h4>

						<p
							className={
								product?.rating?.rate >= 4.0
									? 'font-mono font-bold text-xl text-green-500'
									: product?.rating?.rate >= 2.5
									? 'font-mono font-bold text-xl text-orange-400'
									: 'font-mono font-bold text-xl text-red-500'
							}
						>
							{product?.rating?.rate}
						</p>
					</div>

					<div className="mt-5 p-5 w-full">
						<button className="p-5 w-full rounded-lg text-white bg-black">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}