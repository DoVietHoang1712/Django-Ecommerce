import React from 'react';

const Book = (props) => {
  const books = [
    {
      id: '1',
      title: 'book 1',
      description: 'book 1',
      price: 234,
      image:
        'https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.230',
    },
    {
      id: '2',
      title: 'book 2',
      description: 'book 2',
      price: 234,
      image:
        'https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.230',
    },
    {
      id: '3',
      title: 'book 3',
      description: 'book 3',
      price: 234,
      image:
        'https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.230',
    },
    {
      id: '4',
      title: 'book 4',
      description: 'book 4',
      price: 234,
      image:
        'https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.230',
    },
  ];
  return (
    <div className={`book container ${props.active ? 'active' : 'non-active'}`}>
      <div className="row">
        {books.map((item, index) => (
          <div className="product" key={index}>
            <div className="product-cover">
              <div className="img-product">
                <img src={item.image} alt="" />
              </div>
              <div className="title-product">
                <span>{item.title}</span>
              </div>
              <div className="des-product">
                <span>{item.description}</span>
              </div>
              <div className="price-product">
                <span>{item.price}</span>
              </div>
              <div className="btn">
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
