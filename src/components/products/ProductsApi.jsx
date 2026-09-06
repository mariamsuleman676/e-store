import React, { useEffect, useState } from "react";
import Card from "./Card";


const ProductsApi = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const handleProducts = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://dummyjson.com/products");

      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      console.error("error fetching :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() =>{

handleProducts();


  },[])

  return <div>

<div className="">


<div  className=" grid lg:grid-cols-3 gap-4">


{products.map((product) =>(

<Card key={product.id} product={product}/>))}



</div>







</div>






  </div>;
};

export default ProductsApi;
