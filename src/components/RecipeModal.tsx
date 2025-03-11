import React from 'react';
import { X } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-background rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{recipe.name}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
         
          {recipe.ingredients.map((ingredient) =>(
        <p className="text-sm text-gray-600 mt-2">
          {ingredient.quantity} {ingredient.unit} {ingredient.name}
          </p>
        ))}
        </div>
        <div className="p-6">
         
          {recipe.steps.map((step) =>(
        <p className="text-sm text-gray-600 mt-2">
          {step.step_number} {step.description}
          </p>
        ))}
        </div>
         
      </div>
    </div>
  );
}