"use client"

import { useRouter } from "next/navigation";

export default function ProductAddForm() {

	const router = useRouter();

	const handleSubmit = async e =>{
		e.preventDefault();

		const form = e.target;
		const productName = form.productName.value;
		const payload = {productName};
		const res = await fetch('http://localhost:3000/api/items', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'Content-type': 'application/json'
			}
		});
		const result = await res.json();
		console.log(result);
		form.reset();
		// alert('product added')
		router.push('/products');
		// router.refresh();
	}
  return (
	<div>
		<form action="" onSubmit={handleSubmit}>
			<input className="input border-2" type="text" name="productName" id="" placeholder="product name" />
			<button className="p-2 bg-rose-800 text-white rounded-lg" type='submit'>Submit</button>
		</form>
	</div>
  )
}
