import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Cat } from "lucide-react";

const Index = () => {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    setCatFact(data.fact);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold mb-4 flex items-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        <img 
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba" 
          alt="Cute cat" 
          className="mx-auto object-cover w-full h-64 rounded-md mb-6"
        />
        <p className="text-lg mb-4">
          Cats are fascinating creatures known for their independence, agility, and affectionate nature. 
          They have been domesticated for thousands of years and are one of the most popular pets worldwide.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Did you know?</h2>
        <p className="mb-4">{catFact || "Click the button below to learn an interesting cat fact!"}</p>
        <Button onClick={fetchCatFact}>Get Cat Fact</Button>
      </div>
    </div>
  );
};

export default Index;
