import React from "react";
import { useState } from "react";

function CategoryFilter( {categories, selectedCategory, setSelectedCategory} ) {
  
  function handleButton(category) {
    setSelectedCategory(category)
  }

  const allCategories = categories.map(category => <button key={category} 
                                                           onClick={() => handleButton(category)}
                                                           className={selectedCategory === category ? "selected" : ""}> 
                                                      
                                                           {category} </button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      { allCategories }
    </div>
  );
}

export default CategoryFilter;
