import React, { useState, useEffect } from 'react';
import { Recipe, RecipeResponse } from './types';
import { RecipeCard } from './components/RecipeCard';
import { RecipeModal } from './components/RecipeModal';
import { CookingPot, Loader2 } from 'lucide-react';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('https://n8n.koden.bzh/webhook/3f60d3a0-efe5-4f23-a17a-f5456615743e');
      console.log(response, 'response')
      if (!response.ok) throw new Error('Erreur lors du chargement des recettes');
      
      const responseData: RecipeResponse = await response.json();
      console.log(responseData, 'le json')
      if (!responseData || !Array.isArray(responseData)) {
        throw new Error('Format de données invalide');
      }
      setRecipes(responseData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-gray-600" />
        <p className="mt-4 text-gray-600">Chargement des recettes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
        <div className="bg-red-100 p-6 rounded-lg">
          <p className="text-red-600">{error}</p>
          <button
            onClick={fetchRecipes}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center gap-3">
          <CookingPot className="w-8 h-8 text-gray-700" />
          <h1 className="text-3xl font-bold text-gray-800">Mes Recettes</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {recipes.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">Aucune recette disponible</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard
                //key={recipe.id}
                recipe={recipe}
                onClick={() => setSelectedRecipe(recipe)}
              />
            ))}
          </div>
        )}
      </main>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default App