import React from 'react'
import { FaTrash, FiCheckCircle, AiOutlineSync } from 'react-icons/all'
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
          <small>
            {item.completed ?
              <IconContext.Provider value={{ className: 'completeFaicons' }}>
                <FiCheckCircle onClick={() => props.completed(item.key, item.completed)} />
              </IconContext.Provider>
              :
              <IconContext.Provider value={{ className: 'faicons' }}>
                <AiOutlineSync onClick={() => props.completed(item.key)} />
              </IconContext.Provider>
            }
          </small>

          <input
            className={item.completed && "strike"}
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