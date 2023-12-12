import { useEffect, useState } from 'react'
import {ReactComponent as PlusSvg} from '../img/plus-round.svg';
import {ReactComponent as MinSvg} from '../img/minus-round.svg';
import './Item.css'

interface Props {
  title: string,
  img: string,
  price: number,
  id: number,
  clear: boolean,
  onItemClicked: (id: number, quantity: number) => void,
}

const Item: React.FC<Props> = ({ id, title, img, price, onItemClicked, clear }) => {
  const [quantity, setQuantity] = useState<number>(0)

  useEffect(() => {
    onItemClicked(id, quantity)
  }, [id, quantity, onItemClicked])

  useEffect(() => {
    setQuantity(0)
  }, [clear])

  const minHandler = () => {
    if ((quantity - 1) >= 0) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className='box' >
      <div onClick={() => setQuantity(quantity + 1)}>
        <img alt="" src={img} />
        <p>{title}, €&nbsp;{price}</p>
      </div>
      <div className='buttonDiv'>
        <button className={'buttonMin'} onClick={minHandler}>
          <MinSvg width={20} height={20} fill={'black'} />
        </button>
        <input type="string" onChange={(event) => setQuantity(Number(event.target.value) || 0)} value={quantity} />
        <button  className={'buttonPlus'} onClick={() => setQuantity(quantity + 1)}>
          <PlusSvg width={20} height={20} fill={'black'} />
        </button>
      </div>
    </div>
  )
}

export default Item
