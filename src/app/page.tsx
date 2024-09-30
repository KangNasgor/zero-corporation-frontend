'use client'
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
useEffect(() => {
  function getdata(){
    const getdata = axios.get('http://127.0.0.1:8000/home').then(
      function(response){
        console.log(response)
      }
    ).catch(
      function(error){
        console.log(error)
      }
    )
  }
  getdata();
},[]);
  return (
    <div>
      <h1>List barang :</h1>
      <div>
        <ul>
          <li>
            
          </li>
        </ul>
      </div>
    </div>
  );
}
