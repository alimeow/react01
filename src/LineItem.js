import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({x, toggleCheck, handleDelete}) => {
  return (
    <li className="item" >
      <input type="checkbox" checked={x.checked} onChange={()=>toggleCheck(x.id)}
      />
      <label
      style = { x.checked? {textDecoration: 'line-through'} : null }
      onDoubleClick={()=>toggleCheck(x.id)}> {x.item} </label>
      <FaTrashAlt
      onClick = {()=>{handleDelete(x.id)}}
      role="button" tabIndex="0"/>
    </li>
  )
};

export default LineItem;