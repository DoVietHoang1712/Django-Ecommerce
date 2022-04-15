import React, { useState } from 'react';
import './Categories.scss';
import Book from './Book/Book';
import Clothes from './Clothes/Clothes';
import Electronic from './Electronic/Electronic';
import Laptop from './Laptop/Laptop';
const Categories = () => {
  const [activeTab, setActiveTab] = useState("book");
  // const handleActiveTab = () => {
  //     setActiveTab(1);
  //     console.log(activeTab);
  // }
  return (
    <div className="categories">
      <div className="form-outline">
        <input
          type="search"
          id="form1"
          className="form-control"
          placeholder="Type query"
          aria-label="Search"
        />
      </div>
      <ul className="categories-list list-inline">
        <li className="mr-3 mt-4" onClick={() => setActiveTab("book")}>Book</li>
        <li className="mr-3 mt-4" onClick={() => setActiveTab("clothes")}>Clothes</li>
        <li className="mr-3 mt-4" onClick={() => setActiveTab("electronic")}>Electronic</li>
        <li className="mr-3 mt-4" onClick={() => setActiveTab("laptop")}>Laptop</li>
      </ul>

      <div className="categories-content">
        <Book active ={activeTab==="book" ? true : false} />
        <Clothes active ={activeTab==="clothes" ? true : false}/>
        <Electronic active ={activeTab==="electronic" ? true : false}/>
        <Laptop active ={activeTab==="laptop" ? true : false}/>
      </div>
    </div>
  );
};

export default Categories;
