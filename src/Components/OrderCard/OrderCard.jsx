import { XMarkIcon } from "@heroicons/react/24/solid";
import PropTypes from 'prop-types'


const OrderCard = props => {
  OrderCard.propTypes = {
    _id: PropTypes.node.isRequired,
    name: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired,
    handleDeleteShop: PropTypes.func
}
  const {_id, price, image, name, handleDeleteShop} = props;

  let renderXMarkIcon
  if (handleDeleteShop) {
    renderXMarkIcon = <XMarkIcon onClick={() => handleDeleteShop(_id)} className="h-6 w-6 text-black cursor-pointer"></XMarkIcon>
  }
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img src={image}
            alt={name}
            className="w-full h-full rounded-lg object-cover"
          ></img>
        </figure>
        <p className="text-sm font-light ">{name}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  );
};


export default OrderCard;



