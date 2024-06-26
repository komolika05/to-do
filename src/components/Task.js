import Buttons from "./Buttons";

const Task = () => {
    return (
        <>
            <h1>My TODOs</h1>
            <div className="todo-wrapper">
                <div className="todo-input">
                    <div className="todo-input-item">
                        <label>Title</label> 
                        <input type="text" placeholder="What's the task?" />
                    </div>
                    <div className="todo-input-item">
                        <label>Description</label> 
                        <input type="text" placeholder="Tell me more about the task" />
                    </div>
                    <div className="todo-input-item">
                        <button type="button" className="primaryBtn">Add</button>
                    </div>
                </div>
                <Buttons />
            </div>
        </>
    );
}

export default Task;
