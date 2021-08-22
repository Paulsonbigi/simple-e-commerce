import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./productComponent";
import HeroPage from "./HeroPage";
import axios from "axios";
import { setProducts } from "../../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
        <HeroPage/>
      <div className="text-green-500 text-2xl md:text-3xl lg:text-4xl py-20 font-bold">
        <div className="container flex flex-wrap">
          <ProductComponent />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
