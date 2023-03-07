import LineItem from './LineItem.js';

const ItemList = ({items, toggleCheck, handleDelete}) => {
  return (
    //div will make style weird if item is deleted
    // <div>
    <ul>
      {items.map( x =>
        <LineItem key={x.id}
        x={x}
        handleDelete={handleDelete}
        toggleCheck={toggleCheck}
        />
      )}
    </ul>
    // </div>
    )
};

export default ItemList;
