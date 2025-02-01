'use server';

import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postSingleData = async(postedData) =>{
	try{
		// const postedData = await req.json();
		const result = await dbConnect('test_next_js').insertOne(postedData);
		revalidatePath('/products')
		return result;
	}catch(error){
		console.log(error);
		return null;
	}
}