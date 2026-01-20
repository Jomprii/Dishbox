import recipeData from "./data/recipes.json";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function Dishbox() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="p-4">
        <h1 className="text-3x1 font-bold mb-4">Dishbox</h1>
        <div className="flex-col">
          <Input
            className="m-auto w-120"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          {recipeData.recipes.map((recipe) => (
            <Card
              key={recipe.id}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer "
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-50 overflow-hidden object-cover"
              />
              <CardContent>
                <p>{recipe.title}</p>
                <p>{recipe.cookingTime}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <Button>Add Recipe</Button>
      </div>
    </>
  );
}
