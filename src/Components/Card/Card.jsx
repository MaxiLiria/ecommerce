import { useContext } from "react"
import { Context } from "../../Context/Context"
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid"


const Card = (item) => {
    const {setCount, count, openDetail, setProductDetail, cartProducts , setCartProducts, openCartDetail, closeDetail, closeCartDetail} = useContext(Context)


const showProduct = (product) => {
  openDetail()
  closeCartDetail()
  setProductDetail(product)
}

const addProductToCart = (event, productData) => {
event.stopPropagation()
setCount(count + 1)
setCartProducts([...cartProducts, productData])
openCartDetail()
closeDetail()
}

const renderIcon = (_id) => {
  const isInCart = cartProducts.filter(product => product._id === _id).length > 0

  if (isInCart) {
    return (
    <div className='absolute top-0 right-0 flex justify-center items-center bg-black rounded-full m-2 p-1'>
    <CheckIcon className='h-6 w-6 text-green-400'/>
    </div>
    )
  } else {
    return(
    <div className='absolute top-0 right-0 flex justify-center items-center bg-white  rounded-full m-2 p-1' onClick={(event) => addProductToCart(event, item.item)}>
    <PlusIcon className='text-black w-6 h-6'/>
    </div>
    )
  }
}
  return (
    <>
        <div className="bg-white cursor-pointer w-56 h-60" onClick={() => showProduct(item.item)}>
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{item.item.category}</span>
            <img className='w-full h-full object-cover rounded-lg' src={item.item.image} alt={item.name}></img>
           {renderIcon(item.item._id)}
        </figure>
        <p className='flex justify-between'>
        <span className='text-sm font-light'>{item.item.name}</span>
        <span className='text-lg font-medium'>${item.item.price}</span>
        </p>
    </div>
    </>
  )
}

export default Card

