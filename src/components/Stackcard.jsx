// StackedCards.js
import { useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';


const StackedCards = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="stacked-cards-container">
      {[1, 2, 3, 4, 5].map((cardNumber) => (
        <Element name={`card${cardNumber}`} key={cardNumber}>
          <div
            className={`stacked-card ${scrollPosition >= cardNumber * 100 ? 'visible' : ''}`}
          >
            <h2>Card {cardNumber}</h2>
            <p>Card content goes here...</p>
          </div>
        </Element>
      ))}

      <nav className="stacked-cards-nav">
        {[1, 2, 3, 4, 5].map((cardNumber) => (
          <Link
            key={cardNumber}
            to={`card${cardNumber}`}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Card {cardNumber}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default StackedCards;
