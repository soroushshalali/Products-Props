import React from 'react';
import ProdunktKomponente from './ProduktKomponentestyle.css';



const ProdunktKomponenteFunk = (probs) => {
    return (
        <div className="div-ProKom" >
            <figure>
                <img src={probs.urlAd} alt></img>
                <figcaption>{probs.modell}</figcaption>
            </figure>
            <h3>{probs.preis}</h3>
        </div>
    );
}

export default ProdunktKomponenteFunk;