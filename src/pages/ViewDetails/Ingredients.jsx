import React, { memo } from "react";

const Ingredients = memo(({ ingredients }) => {
  return (
    <div className="space-y-4">
      <p className="font-semibold text-lg mb-2">Ingredients:</p>
      <ul className="list-disc ml-6 text-gray-600">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default Ingredients;
