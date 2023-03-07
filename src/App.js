import logo from './logo.svg';
import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {

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

  return (
    <div className="App">
      <Header title="Grocery List" />
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
