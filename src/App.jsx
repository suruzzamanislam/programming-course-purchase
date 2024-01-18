import { useState } from 'react';
import './App.css';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Cards from './components/Cards/Cards';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [credits, setCredit] = useState(0);
  const [prices, setPrices] = useState(0);
  const [remaining, setRemaining] = useState(20);

  function handleBookmarks(card, credit, price) {
    if (remaining <= 0) {
      return;
    } else {
      const newBookmarks = [...bookmarks, card];
      setBookmarks(newBookmarks);
      const newCredit = credits + credit;
      setCredit(newCredit);
      const newPrice = prices + price;
      setPrices(newPrice);
      const newRemaining = remaining - credit;
      setRemaining(newRemaining);
    }
  }
  return (
    <>
      <div className="px-4 md:px-12">
        <h2 className="text-5xl text-center py-3 font-bold">
          Course Registration
        </h2>
        <div className="mt-9 flex">
          <Cards handleBookmarks={handleBookmarks}></Cards>
          <Bookmarks
            remaining={remaining}
            prices={prices}
            credits={credits}
            bookmarks={bookmarks}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
