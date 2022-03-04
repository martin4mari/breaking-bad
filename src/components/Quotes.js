import axios from "axios";
import { useState } from "react";


function Quotes() {
    const [quote, setQuote] = useState([]);

    function getMenu() {
        axios.get("https://www.breakingbadapi.com/api/quote/random")
            .then((res) =>
                setQuote(res.data))
            .catch((error) => console.log(error))
    }


    console.log(quote)

    return (
        <>
         <section className="section">

            <div className="quote-container">
                <button className="button" onClick={getMenu}>Mandale</button>

                <blockquote className='blockquote'>
                    <cite>{quote.map((r) => r.quote)}</cite>
                    <p className='author'> {quote.map((r) => r.author)}</p>
                    <p className='serie'>{quote.map((r) => r.series)}</p>
                </blockquote>
            </div>
        </section>
        {/*<footer className='footer'>
            <div className='div-footer'>
                Buy me a coffee :)
            </div>
        </footer> */}
        
        
        </>


    )
}

export default Quotes;