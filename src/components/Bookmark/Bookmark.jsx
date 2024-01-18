import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
  const { name } = bookmark;
  return <li className="p-2 text-xl font-semibold ">{name}</li>;
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
