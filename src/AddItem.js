import { FaPlus } from 'react-icons/fa';

    // const item = e.target
const AddItem = ({length, addItem, itemChange }) => {
  return (
    <form className='addForm' onSubmit={addItem} >
      <label htmlFor='addItem'>Add Item</label>
      <input
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        onChange={itemChange}
      />
      <button
        type='submit'
        aria-label='Add Item'
        // onClick = {addItem}
      ><FaPlus /></button>
      {/* <input type="reset" value="Reset Form"/> */}
    </form>
  )
};

export default AddItem;
