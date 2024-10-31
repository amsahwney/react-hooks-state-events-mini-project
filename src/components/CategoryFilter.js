import React from "react";

function CategoryFilter( {categories, setCategories} ) {
  const allCategories = categories.map(category => <button key={category}> {category} </button>)
  console.log(allCategories)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      { allCategories }
    </div>
  );
}

export default CategoryFilter;
