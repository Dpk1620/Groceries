import './App.css';
import Header from './components/header';
import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setProductData } from './redux/productSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  // const allProducts = useSelector((state) => state.product)
  useEffect(() => {
    async function fetchProduct(){

    const Server = process.env.REACT_APP_SERVER_DOMAIN ? process.env.REACT_APP_SERVER_DOMAIN : "https://groceries-yipj.onrender.com"
    const res = await fetch(`${Server}/product`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
    })
    const resData = await res.json()
    dispatch(setProductData(resData))
  }
   fetchProduct()
  }, [])
  

  return (
    <>
      <Toaster />
      <div >
        <Header />
        <main className='pt-16 bg-rose-50 min-h-[calc(100vh)]'>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
