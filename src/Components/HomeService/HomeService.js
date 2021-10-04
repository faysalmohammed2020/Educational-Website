import React from 'react';
import'./HomeService.css';

const HomeService = (props) => {
    const{name,img,price} = props.course
    return (
<div>
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Course Name: {name}</h5>
       
        <p class="card-text">Course Price: {price}</p>
      </div>
    </div>
  </div>
  
  
  
</div>

        </div>
    );
};

export default HomeService;