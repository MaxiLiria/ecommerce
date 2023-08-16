import { useContext } from "react"
import Card from "../../Components/Card/Card"
import Detail from "../../Components/ProductDetail/Detail"
import { Context } from "../../Context/Context"


const Home = () => {
  const {setSearch, filteredItems} = useContext(Context)

const renderView = () => {
  
  if (filteredItems?.length > 0) {
      return (
        filteredItems?.map(item => (
          <Card key={item._id} item={item}/>
        ))
      )
    }else{
      return (
        <div>We don`t have anything</div> 
      )
  } 
}

  return (
    <>
    <h1 className='text-sm mb-2'>Explore a world of style and comfort in our online store. Discover the latest trends in fashion, technology, and more, all in one place.</h1>
    <h1 className='text-2xl font-black mb-3'>Welcome to your ultimate shopping experience!</h1>
    <input type="text" placeholder="Search a product" className='border border-black mb-4 rounded-lg w-80 p-3 focus:outline-none' onChange={(event) => setSearch(event.target.value)}></input>
    <div className='grid gap-2 grid-cols-4 w-full max-w-screen-lg'>
    {renderView()}
    </div>  
      <Detail/>
    </>
  )
}

export default Home