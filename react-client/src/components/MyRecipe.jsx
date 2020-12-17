import React from 'react';
import Figure from 'react-bootstrap/Figure';

const MyRecipe = ({recipe})=> {
  return (
    <div>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={recipe.image}
        />
      </Figure>
    </div>
  );
};

export default MyRecipe;
