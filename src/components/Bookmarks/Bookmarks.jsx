import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, credits, prices, remaining }) => {
  return (
    <div className="w-1/3 px-5">
      <div className="bg-gray-100 rounded-2xl p-4">
        <h1 className="text-2xl text-purple-700 font-semibold border-b-2 border-green-600 pb-3">
          Credit Hour Remaining Hr: {remaining} hr
        </h1>
        <ol className="list-decimal list-inside">
          <h1 className="text-3xl font-semibold py-2">Course Name</h1>
          {bookmarks.map((bookmark, idx) => (
            <Bookmark key={idx} bookmark={bookmark}></Bookmark>
          ))}
        </ol>
        <h1 className="font-semibold text-xl border-y-2 border-green-500 py-3">
          Total Credit Hour: {credits}
        </h1>
        <h1 className="font-semibold text-xl py-3">
          Total Price: {prices} USD
        </h1>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  credits: PropTypes.number,
  prices: PropTypes.number,
  remaining: PropTypes.number,
};

export default Bookmarks;
