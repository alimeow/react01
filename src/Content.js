import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

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
    console.log(typeof items)
  }

  const toggleCheck = (id) => {
    console.log(`key: ${id}`)
    //curly brackets for true condition ***
    const newItems = items.map((item) => item.id === id? {...item, checked: !item.checked} : item)
    setItems(newItems)
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
  }

  const handleDelete = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems)
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
  }

  return (
    <main>
      {items.length !== 0 ? (
        //div will make style weird if item is deleted
        // <div>
        <ul>
          {items.map( x =>
            <li className="item" key={x.id} >
              <input type="checkbox" checked={x.checked} onChange={()=>toggleCheck(x.id)}
              />
              <label
              style = { x.checked? {textDecoration: 'line-through'} : null }
              onDoubleClick={()=>toggleCheck(x.id)}> {x.item} </label>
              <FaTrashAlt
              onClick = {()=>{handleDelete(x.id)}}
              role="button" tabIndex="0"/>
            </li>
          )}
        </ul>
      // </div>
      )
      : <p style={{ martintop: '2rem' }}>List empty</p>}
    </main>
  )
};

export default Content;