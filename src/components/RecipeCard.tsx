import React from 'react';
import { ChefHat } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
    >
    
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{recipe.name}</h3>
       
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <ChefHat className="w-12 h-12 text-gray-400" />
        </div> <p className="text-sm text-gray-600 mt-2">
          
          {recipe.description}
          {/* {recipe.ingredients.length} ingrédients • {recipe.instructions.length} étapes */}
        </p>
        <p className="text-sm text-gray-600 mt-2">
        Pour {recipe.number_of_persons} personnes.
          Origine : {recipe.origin_country}
        </p>
       
      </div>
    </div>
  );
}