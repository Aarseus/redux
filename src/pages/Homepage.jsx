import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";

const Homepage = () => {
  const[limit,setLimit]=useState(8)
  const item_store = useSelector(store=> store.itemStore);
  const items_in_store = item_store.items;
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {items_in_store.map((item) => {
            return (
              <div class="col">
                <div class="card">
                  <img src={item.image} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <h5 class="card-title">{item.price}</h5>
                    <p class="card-text">{item.Description}</p>
                    <button
                      className="btn btn-warning"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {
          limit<items_in_store.length?
          <button className="btn btn-warning" onClick={()=>setLimit(limit+4)}>Show more</button>
          : 
          <div className="alert alert-secondary">All Items Loaded</div>
        }
        
      </div>
    </>
  );
};

export default Homepage;
