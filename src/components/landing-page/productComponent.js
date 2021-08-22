import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
//   const { title, id } = products[0];
const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
        <div className="w-full col-span-1 py-4 px-4 flex items-center relative overflow-hidden bg-white shadow-lg rounded-lg" key={id}>
            <Link to={`/product/${id}`} className="flex items-center">
                <img
                    className="w-full bg-cover mb-20"
                    src={image}
                    alt={title}
                />
                <div className="px-3 pb-2">
            <div className="px-3 absolute left-0 right-0 bottom-0 mt-5 h-12 w-full bg-primary flex items-center">
                <div className="text-sm flex items-center justify-between w-full">
                    <h3 className="font-medium mr-2">{category}</h3>   
                    <h3 className="text-accent">$ {price}</h3> 
                </div>
            </div>
          </div>
          </Link>
        </div>
      );
})
    return <>{renderList}</>
  
};

export default ProductComponent;
