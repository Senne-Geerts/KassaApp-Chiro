// import './Section.css'
// import Item from "./Item"

// type ItemData = {
//   title: string,
//   img: string,
//   price: number,
//   id: number,
  
// }

// interface Props {
//   sectionTitle: string,
//   data: ItemData[],
//   clear: boolean,
//   onItemClicked: (id: number, newNumber: number) => void,
// }

// const section: React.FC<Props> = ({ sectionTitle, data, clear, onItemClicked }) => {
//   const items = data.map(item => (
//     <Item
//       key={data.indexOf(item)}
//       title={item.title}
//       img={item.img}
//       price={item.price}
//       id={item.id}
//       clear={clear}
//       onItemClicked={onItemClicked} />
//   ))

//   return (
//     <div className='wrapper'>
//       <h2 className='h2'>{sectionTitle}</h2>
//       <div className='innerWrapper'>
//         {items}
//       </div>
//     </div>
//   )
// }

// export default section

// src/common/Section.tsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import Item from './Item';
import './Section.css';

type ItemData = {
  title: string;
  img: string;
  price: number;
  id: number;
};

interface Props {
  sectionTitle: string;
  data: ItemData[];
  clear: boolean;
  onItemClicked: (id: number, newNumber: number) => void;
}

const Section: React.FC<Props> = ({ sectionTitle, data, clear, onItemClicked }) => {
  const location = useLocation();

  const items = data.map((item) => (
    <Item
      key={item.id}
      title={item.title}
      img={item.img}
      price={item.price}
      id={item.id}
      clear={clear}
      onItemClicked={onItemClicked}
    />
  ));

  // Conditional rendering based on the route
  if (location.pathname === '/kwispy') {
    // Render components specific to the kwispy route
    return (
      <div className="wrapper">
        <h2 className="h2">{sectionTitle}</h2>
        <div className="innerWrapper">{items}</div>
        {/* Additional components specific to the kwispy route */}
      </div>
    );
  } else if (location.pathname === '/pasta') {
    // Render components specific to the pasta route
    return (
      <div className="wrapper">
        <h2 className="h2">{sectionTitle}</h2>
        <div className="innerWrapper">{items}</div>
        {/* Additional components specific to the pasta route */}
      </div>
    );
  } else {
    // Default rendering for other routes
    return (
      <div className="wrapper">
        <h2 className="h2">{sectionTitle}</h2>
        <div className="innerWrapper">{items}</div>
      </div>
    );
  }
};

export default Section;
