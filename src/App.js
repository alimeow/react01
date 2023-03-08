import logo from './logo.svg';
import './index.css';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [newItem, setValue] = useState({});

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

  const itemChange = (e) => {
    const item = e.target.value;
    const id = items.length + 1;
    const checked = false;
    const newItem = {id, checked, item}
    setValue(newItem)
    // console.log(newItem)
  }

  const addItem = (e) => {
    //add the item:
    e.preventDefault();
    //if use line below app will crash and trigger 'Uncaught TypeError: items.map is not a function' at ItemList.js ***
    // setItems(items.push(newItem))
    if (Object.keys(newItem).length !== 0) {
      items.push(newItem)
      // console.log(items)
      // setItems(items)
      setValue({})
    }
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem addItem={addItem} itemChange={itemChange} />
      <Content
      items={items}
      toggleCheck={toggleCheck}
      handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
