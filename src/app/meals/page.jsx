import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ['400'],
	subsets: ['latin'],
})

export const metadata = {
	title: "All Meals",
	description: "Meals loaded from MealDB API",
  };


export default async  function MealsPage({searchParams}) {

	const query = await searchParams;

	// const meals = []
	const fetchMeals = async () =>{

		try{
			const res = await fetch(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
			);
			const data = await res.json();
			// setMeals(data?.meals || [])
			return data.meals;
		}
		catch(error){
			console.log(error);
			return [];
		}
	}

	const meals = await fetchMeals();

  return (
	<>
	<div className='flex justify-center'>
		<MealSearchInput/>
	</div>
	<div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4'>
		{/* <p>{JSON.stringify(meals)}</p> */}
		{meals?.map((singleMeal) =>{
			return (
				<div className={`${roboto.className} border-4 border-slate-600 p-2`} key={singleMeal?.idMeal} >
					<Image width={641} height={641} src={singleMeal?.strMealThumb} alt={singleMeal?.strMeal} />
					<p className='text-2xl font-bold'>{singleMeal?.strMeal}</p>
					<p>{singleMeal?.strInstructions}</p>
					<Link className="bg-rose-500 p-2 rounded-lg" href={`/meals/${singleMeal.idMeal}`}>Details</Link>
				</div>
			)
		})}
	</div>
	</>
	
  )
}
