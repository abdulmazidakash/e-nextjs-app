import Link from "next/link";
import style from './post.module.css';

export const getPosts = async () =>{
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();
	return data;
}

export default async function Posts() {
	const posts = await getPosts();
  return (
	<div className="space-y-8 border-2 grid grid-cols-4 gap-4">
		{posts.map((singlePost) =>{
			return (
				<>
					<div key={singlePost.id} className="border-4">
						<p className={`text-2xl font-bold ${style['post-title']}`}>{singlePost.title}</p>
						<p className="font-semibold testing-purpose-css-class">{singlePost.body}</p>
						<Link href={`/posts/${singlePost.id}`}><button className="bg-green-500 text-white p-2 rounded-lg">Details</button></Link>
					</div>
				</>
			)
		})}
	</div>
  )
}
