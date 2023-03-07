import { useState } from 'react';
import ItemList from './ItemList';

const Content = ({items, toggleCheck,handleDelete}) => {

  return (
    <main>
      {items.length !== 0 ? (
        <ItemList
        //passing down to grandchild component to declutter
        items={items}
        handleDelete={handleDelete}
        toggleCheck={toggleCheck}
        />
      )
      : <p style={{ martintop: '2rem' }}>List empty</p>}
    </main>
  )
};

export default Content;