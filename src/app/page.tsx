'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
type Product = {
  id : number;
  name : string;
  price : number;
  status : string;
}
const [products, setProducts] = useState<Product[]>([]);
useEffect(() => {
  const getData = async () =>{
    try{
      const response = await axios.get('http://127.0.0.1:8000/products');
      setProducts(response.data);
    }
    catch (error){
      console.log(error);
    }
  }
  getData();
},[]);

function RupiahFormat(num: number){
  return 'Rp.' + num.toLocaleString(undefined,{minimumFractionDigits: 2})
}
  return (
    <div>
      <h1>List barang :</h1>
      <div>
            {
              products.map((product)=>(
                <ul>
                  <li>
                    {product.id}
                  </li>
                  <li>
                    {product.name}
                  </li>
                  <li>
                    {RupiahFormat(product.price)}
                  </li>
                  <li>
                    {product.status}
                  </li>
                </ul>
              ))
            }
      </div>
    </div>
  );
}
