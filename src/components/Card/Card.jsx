import PropTypes from 'prop-types';
import { MdAccessTime } from 'react-icons/md';
const Card = ({ card, handleBookmarks }) => {
  const { id, img, name, body, price, credit } = card;

  return (
    <div className="border border-red-500 rounded-lg drop-shadow-2xl p-2">
      <div className="w-full h-36">
        <img className="w-full h-full" src={img}></img>
      </div>
      <h1 className="text-lg font-bold my-2">{name}</h1>
      <p className=" font-semibold">{body} Lorem,</p>
      <div className="flex justify-between items-center py-2">
        <p className="text-lg">$ Price: {price}</p>
        <p className="flex items-center gap-x-1 text-lg">
          <MdAccessTime></MdAccessTime>Credit: {credit}hr
        </p>
      </div>
      <button
        onClick={() => handleBookmarks(card, credit, price)}
        className="w-full py-2 bg-green-500 text-white font-bold tracking-widest rounded-xl"
      >
        Select
      </button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func,
};

export default Card;
