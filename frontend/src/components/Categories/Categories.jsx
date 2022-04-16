import React, { useState } from 'react';
import './Categories.scss';
import Book from './Book/Book';
import Clothes from './Clothes/Clothes';
import Electronic from './Electronic/Electronic';
import Laptop from './Laptop/Laptop';
const Categories = (props) => {
  const [activeTab, setActiveTab] = useState("book");
  // const handleActiveTab = () => {
  //     setActiveTab(1);
  //     console.log(activeTab);
  // }
  // console.log(props)

  return (
    <div className="categories">
      <ul className="categories-list list-inline">
        <li className={`mr-3 mt-4 py-2 px-4 ${activeTab === 'book' ? 'active-tab' : ''}`} onClick={() => setActiveTab("book")}>Book</li>
        <li className={`mr-3 mt-4 py-2 px-4 ${activeTab === 'clothes' ? 'active-tab' : ''}`} onClick={() => setActiveTab("clothes")}>Clothes</li>
        <li className={`mr-3 mt-4 py-2 px-4 ${activeTab === 'electronic' ? 'active-tab' : ''}`} onClick={() => setActiveTab("electronic")}>Electronic</li>
        <li className={`mr-3 mt-4 py-2 px-4 ${activeTab === 'laptop' ? 'active-tab' : ''}`} onClick={() => setActiveTab("laptop")}>Laptop</li>
      </ul>

      <div className="categories-content">
        <Book active={activeTab === "book" ? true : false} handleAddToCart={props.handleAddToCart} />
        <Clothes active={activeTab === "clothes" ? true : false} />
        <Electronic active={activeTab === "electronic" ? true : false} />
        <Laptop active={activeTab === "laptop" ? true : false} />
      </div>
    </div>
  );
};

export default Categories;
