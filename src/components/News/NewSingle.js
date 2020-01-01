import React from "react";

import "./NewSingle.css";

const NewSingle = ({ item }) => (
  <div className='col s3'>
    <div className='card medium'>
      <div className='card-image'>
        <img src={item.urlToImage} alt='' />
        <span className='card-title'>{item.source.name}</span>
      </div>
      <div className='card-content'>
        <p className='blue-text text-darken-2'>{item.title}</p>
      </div>
      <div className='card-action'>
        <a href={item.url} target='_blank'>
          Full article
        </a>
      </div>
    </div>
  </div>
);

export default NewSingle;
