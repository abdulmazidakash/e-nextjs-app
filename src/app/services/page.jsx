import Link from 'next/link';
import React from 'react'

export default function ServicesPage() {
	const data = [
		{
		  _id: "60d21b4667d0d8992e610c85",
		  service_name: "EcoClean",
		  service_image: "/service_img_1.png",
		  service_description:
			"EcoClean offers environmentally friendly cleaning services for homes and offices, using only non-toxic and biodegradable products.",
		},
		{
		  _id: "60d21b4667d0d8992e610c86",
		  service_name: "TechFix",
		  service_image: "/service_img_2.png",
		  service_description:
			"TechFix provides comprehensive repair and maintenance services for all your electronic devices, ensuring they run smoothly and efficiently.",
		},
		{
		  _id: "60d21b4667d0d8992e610c87",
		  service_name: "FitLife",
		  service_image: "/service_img_3.png",
		  service_description:
			"FitLife offers personalized fitness training and nutrition plans to help you achieve your health and wellness goals.",
		},
	  ];
  return (
	<div className='w-11/12 mx-auto'>
		<p className='font-bold text-3xl my-4 text-center'>ServicesPage</p>
		<div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-3 gap-4 mx-auto'>
		{ data.map((d) =>{
			return (

					<div className='space-y-4'>
						<Link  href={`/services/${d._id}`}>
							<img className='w-full border-2' src={d.service_image} alt="" />
						</Link>
					</div>

			)
		})}
		</div>
	</div>
  )
}
