import React from 'react';
import TodoList from '../Components/TodoList';
import Title from '../Layout/Title'

const MyRequest = (props) => {
    return (
        <div>
            <Title title="Request" />
            <div className="box-container">
                <TodoList />
            </div>
        </div>
    )
}

export default MyRequest;