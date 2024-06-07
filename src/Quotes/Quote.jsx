import React, {useState, useEffect} from 'react';
import './quote.css';
const Quote = () => {
    const [quote, setQuote] = useState("");
  useEffect(() => {
    fetchQuote();
  }, []);
  const fetchQuote = async () => {
    try{
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      setQuote(data.slip.advice);
      
    } catch (error) {
      console.error(error);
    }
  };

    

  return (
    <div className='quote-container'>
        <h2 className='title'>Quote Generator</h2>
     { <p className='quote'>{quote}</p>}
      < button className="quote-btn" onClick={fetchQuote}>New Quote</button>
    </div>
  );
};


export default Quote;
