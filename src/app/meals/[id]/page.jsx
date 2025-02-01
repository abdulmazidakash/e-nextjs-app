
  const fetchSingleMeals = async (id) =>{

	try{
		const res = await fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
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

export async function generateMetadata({ params}) {
	// read route params
	const id = (await params).id
   
	// fetch data
	const [singleMeal] = await fetchSingleMeals(id);
	console.log(singleMeal);
   
	return {
	  title: singleMeal.strMeal,
	  description: singleMeal.strInstructions,
	};
  }

export default async  function SingleMealsPage({ params}) {

	const p = await params;
	const singleMeal = await fetchSingleMeals(p?.id);

  return (
	
	<div>
		<p>{JSON.stringify(singleMeal)}</p>
	</div>
	
	
  )
}
