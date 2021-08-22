import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
//   const { title, id } = products[0];
const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
        <div className="w-full md:w-1/3 py-4 px-4 bg-white shadow-lg rounded-lg my-4 md:my-8" key={id}>
            <Link to={`/product/${id}`}>
                <div className="w-full flex justify-between p-3">
                    <div className="flex">
                    <div className="rounded-full h-8 w-8 flex items-center justify-center overflow-hidden">
                        <img
                        src={image}
                        alt={title}
                        />
                    </div>
                    <span className="pt-1 ml-2 font-bold text-sm">braydoncoyer</span>
                    </div>
                    <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
                    <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
                    </span>
                </div>
                <img
                    className="w-full bg-cover"
                    src={image}
                    alt={title}
                />
                <div className="px-3 pb-2">
            <div className="px-3 mt-5 h-9 w-full bg-primary flex items-center">
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
