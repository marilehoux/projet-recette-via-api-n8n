export interface Recipe {
  id: string;
  name: string;
  image: string | null;
  ingredients: {   
    name: string;
    quantity: string;
  }[];
  instructions: string[] ;
}

export interface RecipeResponse {
  data: Recipe[];
}