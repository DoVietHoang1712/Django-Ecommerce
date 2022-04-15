import React from 'react';

const Category = (props) => {
  return (
    <div className={`book container ${props.active ? 'active' : 'non-active'}`}>
      
    </div>
  );
};

export default Category;
