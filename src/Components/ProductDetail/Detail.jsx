import { XMarkIcon } from '@heroicons/react/24/solid'
import './Detail.css'
import { useContext } from 'react'
import { Context } from '../../Context/Context'


const Detail = () => {
const {open, closeDetail, productDetail} = useContext(Context)

  return (
    <aside className={`${open ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`} >
    <div className='flex justify-between items-center p-3'>
    <h2 className='font-medium text-xl'>Detail</h2>
    <div>
    <XMarkIcon onClick={() => closeDetail() } className="h-6 w-6 text-black cursor-pointer" />
    </div>
    </div>
    <figure className='px-3'>
      <img className='w-full h-full rounded-lg' src={productDetail.image} alt={productDetail.title}></img>
    </figure>
    <p className='flex flex-col gap-2 p-3'>
      <span className='font-medium text-2xl'>${productDetail.price}</span>
      <span className='font-medium text-md'>{productDetail.name}</span>
      <span className='font-light text-sm'>{productDetail.description}</span>
    </p>
    </aside>
  )
}

export default Detail



