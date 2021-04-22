import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  //   const categories = ['One Punch', 'Samurai X', 'Dragon Ball '];

  const [categories, setCategory] = useState(['avengers']);

  //   const handleAdd = () => {
  //     // setcategory([...categories, 'hunterX']);
  //     setcategory((cats) => [...cats, 'HunterX']);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategory={setCategory} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
