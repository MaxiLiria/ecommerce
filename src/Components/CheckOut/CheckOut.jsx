import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { Context } from "../../Context/Context"
import './CheckOut.css'
import OrderCard from "../OrderCard/OrderCard"
import Utils from "../../Utils/Utils"
import { useNavigate } from "react-router-dom"



const CheckOut = () => {
    const {closeCartDetail, openCart, cartProducts, setCartProducts, setMyOrder, myOrder,setSearch,user} = useContext(Context)
     
     
     const navigate = useNavigate()

      const handleDeleteShop = (_id) => {
      const filteredProducts = cartProducts.filter(product => product._id != _id)
      setCartProducts(filteredProducts)
    }

    const handleCheckOut = () => {
      if (user) {
        
        const orderToAdd = {
          date: '01.02.23',
          products: cartProducts,
          totalProducts: cartProducts.length,
          totalPrice: Utils(cartProducts)
        }
  
        setMyOrder([...myOrder, orderToAdd])
        setCartProducts([])
        closeCartDetail()
        setSearch(null);
        navigate("/order/last")
      } else {
        // Usuario no autenticado, redirigir a la página de inicio de sesión
        
       navigate("/sign-in");

      }
    }
    
  return (
    <aside className={`${openCart ? 'flex' : 'hidden'} check flex-col fixed right-0 border border-black rounded-lg bg-white`} >
    <div className='flex justify-between items-center p-3'>
    <h2 className='font-medium text-xl'>My Order</h2>
    <div>
    <XMarkIcon onClick={() => closeCartDetail()} className="h-6 w-6 text-black cursor-pointer" />
    </div>
    </div>
    <div className='px-6 overflow-y-scroll flex-1'>
    {cartProducts.map(shop => {
      return (
        <OrderCard
      key={shop._id}
      _id={shop._id}
      price={shop.price}
      image={shop.image}
      name={shop.name}
      handleDeleteShop={handleDeleteShop}
    />
      )
    })}
    </div>
    <div className='px-6 mb-6'>
    <p className='flex items-center justify-between mb-2'>
      <span className='font-light'>Total:</span>
      <span className='font.medium text-2xl'>${Utils(cartProducts)}</span>
    </p>
    
    <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => handleCheckOut()}>CheckOut</button>
    
    </div>
    </aside>
  )
}

export default CheckOut