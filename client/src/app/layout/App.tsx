import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product} from "../models/product"
import { Typography } from "@mui/material"
import SWR from "../../features/SWR";

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, []);

  function addProduct() {
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1),
        price: 3000.00,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200'
      }])
  }

  return (
    <>
      <Typography variant='h1'>Re-Store</Typography>
      <Catalog products={products} addProduct={addProduct} />
      <SWR />
    </>
  );
}

export default App;
