import { useSelector } from 'react-redux'
import CartProducts from './CartProducts'
import { Link } from 'react-router-dom'

const Cart = () => {
  document.title="Groceries - CART"
  const productCartItem = useSelector((state)=>state.product.cartItem)  
  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  return (
    <div className='p-2 md:p-4'>
      <h2  className='text-lg md:text-2xl font-bold text-slate-600'>
        Your Cart Items here !
      </h2>
      {productCartItem[0] ?
        <div className="my-4 flex  gap-3">
          {/* display cart items  */}
          <div className="w-full">
            {productCartItem.map((el) => {
              return (
                <CartProducts
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  qty={el.qty}
                  total={el.total}
                  price={el.price}
                />
              );
            })}
          </div>
             {/* total cart item  */}
             <div className="w-full max-w-md  ml-auto">
             <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
             <div className="flex w-full py-2 text-lg border-b">
               <p>Total Qty :</p>
               <p className="ml-auto w-32 font-bold">
                {totalQty}
                </p>
             </div>
             <div className="flex w-full py-2 text-lg border-b">
               <p>Total Price</p>
               <p className="ml-auto w-32 font-bold">
                 <span className="text-slate-500">₹</span> 
                 {totalPrice}
               </p>
             </div>
             <button className="bg-red-500 w-full text-lg font-bold py-2 text-white" 
            //  onClick={handlePayment}
             >
               Payment
             </button>
           </div>
         </div>
          :   <>
          <div className="flex w-full justify-center items-center flex-col">
            <img src={""} className="w-full max-w-sm  hover:scale-105 transition-all" alt=""/>
            <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
            <Link to={"/"}>
            <p className="text-slate-300 text-2xl font-bold pt-8">Go To Home Page</p>
            </Link>
          </div>
        </>}
        </div>
  )
}


export default Cart