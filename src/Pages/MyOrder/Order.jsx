import { useContext } from "react"
import { Context } from "../../Context/Context"
import OrderCard from "../../Components/OrderCard/OrderCard"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"


const Order = () => {
  const {myOrder} = useContext(Context)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
  if (index === 'last') {
    index = myOrder?.length -1
  } 
  return (
    <>
    <div className="flex justify-center items-center w-80 relative mb-5">
    <Link to={"/my-orders"} className="absolute left-0">
    <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
    </Link>
    <h1>My Order</h1>
    </div>
    <div className='flex flex-col w-80'>
    {myOrder?.[index]?.products.map(shop => {
      return (
        <OrderCard
      key={shop._id}
      _id={shop._id}
      price={shop.price}
      image={shop.image}
      name={shop.name}
    />
      )
    })}
    </div>
    </>
  )
}

export default Order

