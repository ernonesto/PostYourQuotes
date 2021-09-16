import './Quotes.css';

function Quotes({quote}) {
    
    const listeItems=quote.map((item) =>
        <div className="my-quote">
            {item.quote}
        </div>
    )
    return (
        <div className="Quotes">
            
              {listeItems} 
            
        </div>
    );
}



export default Quotes;