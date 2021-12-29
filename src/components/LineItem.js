import { FaTrashAlt } from "react-icons/fa"

function LineItem({ item, handleCheck, handleDelete }) {
    
    return (
        <li className="list-items">

            <input
                className="list-input"
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
 
            <label  
                onDoubleClick={() => handleCheck(item.id)}
                className="list-text"
                style={
                    (item.checked) ? { textDecoration: "line-through" } : null
                }
            >{item.item}</label>

            <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />

        </li>
    )
}

export default LineItem
