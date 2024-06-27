import React, {useState, useEffect} from 'react';

const Buttons = () => {
    const [isCompleteScreen , setIsCompleteScreen] = useState(false)
    return (
        <>
            <div className="btn-area">
                <button className={`secondaryBtn ${isCompleteScreen === false && 'active'}`} onClick={() => setIsCompleteScreen (false)}>Todo</button>
                <button className={`secondaryBtn ${isCompleteScreen === true && 'active'}`} onClick={() => setIsCompleteScreen (true)}>Completed</button>
            </div>
            <div className="todo-list">
                <div className="todo-list-item">
                    <h3>Task 1</h3>
                    <p>Description</p>
                </div>
            </div>
        </>
    )
}

export default Buttons