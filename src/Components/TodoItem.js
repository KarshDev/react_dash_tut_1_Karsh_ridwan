import React from 'react'
import { FaTrash } from 'react-icons/all'
import { IconContext } from 'react-icons'
import FlipMove from 'react-flip-move'
import '../assets/css/Todo.css'

const TodoItem = (props) => {
  const items = props.items;
  let listItems
 if (items) {
    listItems = items.map(item => {
      return <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={
              (e) => {
                props.setUpdate(e.target.value, item.key)
              }
            }
          />
          <span>
            <IconContext.Provider value={{ className: 'faicons' }}>
              <FaTrash onClick={() => props.deleteItem(item.key)} />
            </IconContext.Provider>
          </span></p>
      </div>
    })
  
 }
  
  return (
    <div>
      <FlipMove duration={400} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  )
}

export default TodoItem