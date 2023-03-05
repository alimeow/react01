import { useState } from 'react';

const Content = () => {
  const[items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }
  ]);

  const handleClick = (e) => {
    console.log(items)
    console.log(typeof items)
  }

  return (
    <main>
      <div>
        {/* <button onClick={handleClick}>click</button> */}
        <ul>
          {items.map(x => <li key={x.id}>{x.item}</li>)}
        </ul>
      </div>
    </main>
  )
};

export default Content;