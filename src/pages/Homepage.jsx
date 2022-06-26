import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";

const Homepage = () => {
  const [limit, setLimit] = useState(8);
  const [search, setSearch] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);

  const item_store = useSelector((store) => store.itemStore);
  const items_in_store = item_store.items;
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  useEffect(() => {
    setFilteredProduct(
      items_in_store.filter((item) =>
        item.name.toLowerCase().match(search.toLowerCase())
      )
    );
  }, [search]);
  return (
    <>
      <Navbar />
      <div className="container-fluid bg-light py-2 ">
        <input
          type="search" onChange={(e)=>setSearch(e.target.value)}
          className="form-control  w-75 mx-auto"
          placeholder="enter your search here"
        />
      </div>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {items_in_store.slice(0,limit).map((item) => {
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
        {limit < filteredProduct.length ? (
          <button
            className="btn btn-warning"
            onClick={() => setLimit(limit + 4)}
          >
            Show more
          </button>
        ) : (
          <div className="alert alert-secondary">All Items Loaded</div>
        )}
      </div>
    </>
  );
};

export default Homepage;
