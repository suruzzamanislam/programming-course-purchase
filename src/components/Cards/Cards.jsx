import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Cards = ({ handleBookmarks }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('courses.json')
      .then(res => res.json())
      .then(data => setCards(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-2/3">
      {cards.map((card, idx) => (
        <Card key={idx} card={card} handleBookmarks={handleBookmarks}></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleBookmarks: PropTypes.func,
};

export default Cards;
