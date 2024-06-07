import React, { useState, useEffect } from 'react';
import './quote.css';

const Quote = () => {
    const [quote, setQuote] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://api.adviceslip.com/advice");
            if (!response.ok) {
                throw new Error("Failed to fetch quote");
            }
            const data = await response.json();
            setQuote(data.slip.advice);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='quote-container'>
            <h2 className='title'>Quote Generator</h2>
            {loading ? <p className='loading'>Please wait...</p> : <p className='quote'>{quote}</p>}
            <button className="quote-btn" onClick={fetchQuote} disabled={loading}>
                {loading ? "Loading..." : "New Quote"}
            </button>
        </div>
    );
};

export default Quote;