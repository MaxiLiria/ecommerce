import { useContext } from "react"
import OrdersCard from "../../Components/OrdersCard/OrdersCard"
import { Context } from "../../Context/Context"
import { Link } from "react-router-dom"


const Orders = () => {
const {myOrder} = useContext(Context)

  return (
    <div>
    <div className="flex justify-center items-center w-80 relative mb-4">
    <h1 className="font-medium text-xl">My Orders</h1>
    </div>
    {myOrder.map((order, i) => {
      return (
       <Link key={i} to={`/my-orders/${i}`}>
         <OrdersCard
          totalPrice={order.totalPrice}
          totalProducts={order.totalProducts}
        />
       </Link>
      )
    }
    )}
    </div>
  )
}

export default Orders