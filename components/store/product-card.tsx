import Image from "next/image"

export interface Product {
	id: string
	title: string
	price: number
	image: string
}

export default function ProductCard({ product }: { product: Product }) {
	return (
		<div className="rounded-xl border bg-white p-4 shadow-sm">
			<div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
				<Image src={product.image} alt={product.title} fill className="object-cover" />
			</div>
			<h3 className="mt-3 text-sm font-medium text-gray-900">{product.title}</h3>
			<p className="text-sm text-gray-600">₹ {product.price.toFixed(2)}</p>
			<button className="mt-3 w-full rounded-lg bg-orange-600 px-3 py-2 text-sm font-medium text-white hover:bg-orange-700">Add to Cart</button>
		</div>
	)
}
