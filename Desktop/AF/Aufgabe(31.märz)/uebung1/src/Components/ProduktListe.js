import React from 'react';
import ProdunktKomponenteFunk from './ProduktKomponente';
import './ProListeStyle.css'


const ProduktListe = () => {
    return (
        <section className="ProduktListe-sec" >
            <ProdunktKomponenteFunk urlAd="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-ultra-.jpg" modell="Galaxy S20" preis="200$" />
            <ProdunktKomponenteFunk urlAd="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a51-sm-a515.jpg" modell="Galaxy S40" preis="200$" />
            <ProdunktKomponenteFunk urlAd="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s20-.jpg" modell="Galaxy S70" preis="600$" />
            <ProdunktKomponenteFunk urlAd="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a50-sm-a505f-ds.jpg" modell="Galaxy S80" preis="1100$" />
            <ProdunktKomponenteFunk urlAd="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m31-sm-m315f.jpg" modell="Galaxy S120" preis="1300$" />
            <ProdunktKomponenteFunk urlAd="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a31.jpg" modell="Galaxy S1210" preis="9900$" />
        </section>
    );
}

export default ProduktListe;