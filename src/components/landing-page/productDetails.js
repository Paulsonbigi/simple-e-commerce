import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  deleteProduct,
} from "../../redux/actions/productActions";

const ProductDetails = () => {
  const { productID } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchResponse = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log(err);
      });
    console.log(response.data);
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if( productID && productID !== "" ) fetchResponse(productID);
    return () => {
        dispatch(deleteProduct())
    }
  }, [productID]);

  return (
    <div className="w-full pt-20">
      {Object.keys(product).length === 0 ? (
        <div className="container">Loading ...</div>
      ) : (
        <div className="container mb-8  block md:flex md:items-center w-10/12 border-2 p-4 md:w-3/4 bg-white mx-auto">
          <div className=" flex items-center w-2/3 mx-auto justify-center overflow-hidden">
            <img src={image} alt={title} />
          </div>
          <div className="px-2 py-3 md:pl-12">
            <h3 className="text-primary capitalize font-extrabold">
              {category}
            </h3>
            <p className="text-xs text-grey-100 mb-2">{title}</p>
            <p className="text-sm font-normal normal text-justify mb-6">
              {description}
            </p>
            <div className="bg-secondary w-full flex justify-between p-2">
              <h6 className="font-bold text-accent">$ {price}</h6>
              <button className="text-xs bg-accent text-primary p-1 hover:bg-grey-100">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
