import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Context = createContext()

const ContextProvider = ({children}) => {
   //Search
   const [search, setSearch] = useState(null)

   //Search by category
   const [searchByCategory, setSearchByCategory] = useState(null)
    
    //Products-cards
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch('https://eccomerce-back.vercel.app/products')
      .then(res => res.json())
      .then(data => setItems(data))
      
      },[])

      //Items filter-Search
    const [filteredItems, setFilteredItems] = useState(null);
      
    const filteredItemsByTitle = (items, search) => {
      return items?.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
      return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, search, searchByCategory) => {
      if (searchType === 'BY_TITLE') {
        return filteredItemsByTitle(items, search)
      }
      if (searchType === 'BY_CATEGORY') {
        return filteredItemsByCategory(items, searchByCategory)
      }
      if (searchType === 'BY_TITLE_AND_CATEGORY') {
        return filteredItemsByCategory(items, searchByCategory).filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      }
      if (!searchType) {
        return items
      }
    }

    useEffect(() => {
      if (search && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, search, searchByCategory))
      if (search && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, search, searchByCategory))
      if (!search && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, search, searchByCategory))
      if (!search && !searchByCategory) setFilteredItems(filterBy(null, items, search, searchByCategory))
    },[items, search, searchByCategory])

    //Increment cart
    const [count, setCount] = useState(0)

    //Product detail
    const [productDetail, setProductDetail] = useState({})

    //Add product to cart
    const [cartProducts, setCartProducts] = useState([])

    //Order
    const [myOrder, setMyOrder] = useState([])

    //Open-close cart-detail
    const [openCart, setOpenCart] = useState(false)
    const openCartDetail = () => setOpenCart (true)
    const closeCartDetail = () => setOpenCart (false)

    //Open, close Detail
    const [open, setOpen] = useState(false)
    const openDetail = () => setOpen (true)
    const closeDetail = () => setOpen (false)
    
    //Login
    const [user, setUser] = useState(null);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate()
    
    const onSubmit = (formData) => {
      axios.post('https://eccomerce-back.vercel.app/users/login', formData).then((res) => {
        
      if (res.status === 200) {
        setUser(res.data.user);
        setLoginError('');
        navigate("/")
      } else {
        setLoginError(res.data.message);
      }
    })
    .catch((error) => {
      console.log(error);
      setLoginError(error.response.data.message);
    });
    };

    //Register
    const submit = (formData) => {
      axios.post('https://eccomerce-back.vercel.app/users/register',formData).then((res) => {
        if (res) {
          Swal.fire({
            title:'Good job!',
            text: 'User created',
            icon: 'success',
            confirmButtonText: 'Will be redirected to log in.'
          })
        } 
        navigate('/sign-in')
      })
      .catch((error) => {
        Swal.fire({
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      })
    }

  return (
    <Context.Provider value={{items,setItems, count, setCount, openDetail, closeDetail, open, productDetail,setProductDetail, cartProducts, setCartProducts, openCart, openCartDetail, closeCartDetail, myOrder, setMyOrder,search,setSearch,filteredItems, searchByCategory, setSearchByCategory,user,loginError,onSubmit,submit}}>
        {children}
    </Context.Provider>
  )
}
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Add this line for PropTypes validation
  };

export {Context,ContextProvider}
