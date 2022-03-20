// import TodoItem from "./TodoItem.js";
// import todos from "./todosa.js";
// const TodoList = () => {
//     return(`
//  <ul>
//             ${
//         todos.map(todo => {
//             return(TodoItem(todo));
//         }).join('')
//     }
//         </ul>
//     `);
// }
// export default TodoList;
import TodoItem from "./TodoItem.js";
import todosa from "./todosa.js";
const TodoList = () => {
    return(
            <ul>
                <TodoItem todos={todosa}/>
        </ul>);
}
export default TodoList;