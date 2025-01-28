import Link from 'next/link'
import React from 'react'

export default function NotFoundPage404() {
  return (
	<div className='flex justify-center items-center w-full h-full'>
		<div>
		<h1>404 Not FOUND</h1>
		<Link href={'/'}>Go Back to Home</Link>
		</div>
	</div>
  )
}
