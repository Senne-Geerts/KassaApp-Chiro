import { useCallback, useEffect, useState } from 'react';
import Section from '../common/Section';
import Item from '../common/Item'
import '../App.css';

import KaasSchotel from '../img/cheese.svg'
import CrouqueVuistje from '../img/croque.svg'
import CroqueGroenten from '../img/noun-vegetable-sandwich-2742355.svg'
import ijs from '../img/noun-icecream-3204040.svg'

import cola from '../img/noun-cola-2239923.svg'
import flesWater from '../img/noun-bottled-water-2070462.svg'

import WijnGlas from '../img/noun-red-wine-708044.svg'
import WijnFles from '../img/noun-4058969.svg'
import CavaGlas from '../img/noun-champagne-4614516.svg'
import CavaFles from '../img/champagne.svg'

import Pint from '../img/noun-pint-1323692.svg'
import Vedett from '../img/noun-beer-pint-glass-218317.svg'
import ZwareBieren from '../img/noun-pint-1547104.svg'

import koffieThee from '../img/noun-cup-2985154.svg'

const DATA = [{
    sectionTitle:'',
    data:[
        { id: 1, title: 'Kaas schotel', img: KaasSchotel, price: 18 },
        { id: 2, title: 'Croque met groentjes', img: CroqueGroenten, price: 8 },
        { id: 3, title: 'Crouque uit het vuistje', img: CrouqueVuistje, price: 3},
        { id: 4, title: 'Portie ijs', img: ijs, price: 2},
        { id: 5, title: 'Water/frisdrank', img: cola, price: 2.2 },
        { id: 6, title: 'Fles water', img: flesWater, price: 10},
        { id: 7, title: 'Wijn/Cava glas', img: WijnGlas, price: 4 },
        { id: 8, title: 'Wijn/Cava fles', img: WijnFles, price: 18 },
        { id: 9, title: 'Pintje/kriek', img: Pint, price: 2.2 },
        { id: 10, title: 'Vedett', img: Vedett, price: 3 },
        { id: 11, title: 'Zware bieren', img: ZwareBieren, price: 4 },
        { id: 12, title: 'Koffie/Thee', img: koffieThee, price: 2.5 }
    ]}
  ];

interface Prijs {
  id: number,
  price: number,
  quantity: number,
}

function App() {
  const [totPrice, setTotPrice] = useState<number>(0)
  const [quantities, setQuantities] = useState<Prijs[]>([])
  const [totalsum, setTotalSum] = useState<number>(0);
  const [clear, setClear] = useState<boolean>(false)

  useEffect(() => {
    let quantitiesArray:Prijs[] = []
    for (const sindex in DATA) {
      for (const eindex in DATA[sindex].data) {
        const element = DATA[sindex].data[eindex]
        quantitiesArray.push({ id: element.id, price: element.price, quantity: 0})
      }
    }

    setQuantities(quantitiesArray)
  }, [])

  const calculatePrice = useCallback(() => {
    let price = 0
    for (const i in quantities) {
      price = price + quantities[i].price * quantities[i].quantity
    }

    setTotPrice(Math.round(price * 100) / 100)
  }, [quantities])

  const onItemClicked = useCallback((id: number, newValue: number) => {
    const quantitiesArray = quantities
    for (const i in quantities) {
      if (quantities[i].id === id) {
        quantitiesArray[i] = { ...quantitiesArray[i], quantity: newValue }
      }
    }

    setQuantities(quantitiesArray)
    calculatePrice()
  }, [quantities, calculatePrice])

  const handleClear = () => {
    // Add totPrice to totalsum
    setTotalSum(prevTotalSum => prevTotalSum + totPrice);
    
    // Clear quantities
    setQuantities(quantities.map(item => ({ ...item, quantity: 0 })));
    
    // Clear totPrice
    setTotPrice(0);
    
    // Toggle clear state
    setClear(!clear);
  };


  const sections = DATA.map(item => (
    <Section
      key={DATA.indexOf(item)}
      clear={clear}
      sectionTitle={item.sectionTitle}
      data={item.data}
      onItemClicked={onItemClicked}
    />
  ))

  return (
    <div className="App">
      <header className="header">
        <h1>Kassaprogramma Kaas</h1>
        <div className="priceDiv">
          <p className="price">Totaal: € {totPrice}</p>
          <button className="clearButton" onClick={handleClear}>Clear</button>
        </div>
      </header>
      <main className="main">
        {sections}
      </main>
      <footer className="footer">
        <p>Totale som: € {totalsum}</p>
      </footer>
    </div>
  );
}

export default App;
