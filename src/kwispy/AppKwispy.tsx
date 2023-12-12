import { useCallback, useEffect, useState } from 'react';
import Section from '../common/Section';
import '../App.css';

import chips from '../img/chips.svg'
import partysnacks from '../img/fries.svg'

import water from '../img/noun-bottled-water-2070462.svg'
import cola from '../img/noun-cola-2239923.svg'
import frisdranken from '../img/noun-plastic-bottle-3435208.svg'
import iceTea from '../img/noun-iced-tea-3817414.svg'
import fruitSap from '../img/noun-fruit-juice-2087226.svg'

import WijnGlas from '../img/noun-red-wine-708044.svg'
import WijnFles from '../img/noun-4058969.svg'
import CavaGlas from '../img/noun-champagne-4614516.svg'
import CavaFles from '../img/champagne.svg'

import Pint from '../img/noun-pint-1323692.svg'
import Kriek from '../img/noun-bottle-152234.svg'
import Vedett from '../img/noun-beer-pint-glass-218317.svg'
import ZwareBieren from '../img/noun-pint-1547104.svg'

import koffieThee from '../img/noun-cup-2985154.svg'


const DATA = [
  {
    sectionTitle: 'Eten', data: [
      { id: 1, title: 'Partysnacks', img: partysnacks, price: 7},
      { id: 2, title: 'Chips', img:chips, price: 2 },
    ]
  },
  {
    sectionTitle: 'Frisdranken', data: [
      { id: 3,title: 'Water Plat/Bruis', img: water, price: 2.5 },
      { id: 4,title: 'Cola (zero)', img: cola, price: 2.5 },
      { id: 5,title: 'Limonade', img: frisdranken, price: 2.5 },
      { id: 6,title: 'Ice Tea', img: iceTea, price: 2.5 },
    ]
  },
  {
    sectionTitle: 'Wijnen/Cava', data: [
      { id: 7, title: 'Wijn rood/wit glas', img: WijnGlas, price: 4 },
      { id: 8, title: 'Wijn rood/wit fles', img: WijnFles, price: 18 },
      { id: 9, title: 'Cava', img: CavaGlas, price: 4 },
      { id: 10, title: 'Cava fles', img: CavaFles, price: 18 },
    ]
  },
  {
    sectionTitle: 'Bieren', data: [
      { id: 11, title: 'Pintje', img: Pint, price: 2.5 },
      { id: 12, title: 'Kriek', img: Kriek, price: 2.5 },
      { id: 13, title: 'Vedett', img: Vedett, price: 3 },
      { id: 14, title: 'Zware bieren', img: ZwareBieren, price: 4 },
    ]
  },
]

interface Prijs {
  id: number,
  price: number,
  quantity: number,
}

function App() {
  const [totPrice, setTotPrice] = useState<number>(0)
  const [quantities, setQuantities] = useState<Prijs[]>([])
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
        <h1>Kassaprogramma Kwispy</h1>
        <div className="priceDiv">
          <p className="price">Totaal: € {totPrice}</p>
          <button className="clearButton" onClick={() => setClear(!clear)}>Clear</button>
        </div>
      </header>
      <main className="main">
        {sections}
      </main>
    </div>
  );
}

export default App;
