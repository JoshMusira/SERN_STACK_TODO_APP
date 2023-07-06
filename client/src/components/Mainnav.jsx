import './mainnav.css'
import Profile from './Profile';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

//using Redux
import { useSelector } from "react-redux";

export default function Mainnav() {
    const bar = useSelector((state) => state.sidebar.bar.bar);

    return (
        <div className='mainnav'>
            {
                bar == 'addTodo' ? (
                    <div className="mainnav_wrapper">
                        <h2>Add Todos</h2>
                        <AddTodo />
                    </div>
                ) : bar == 'viewTodo' ? (
                    <div className="mainnav_wrapper" >
                        <h2>View All Todos</h2>
                        <TodoList />
                    </div>
                ) : bar == 'profile' ? (
                    <div className="mainnav_wrapper">
                        <h2>User Profile</h2>
                        <Profile />
                    </div>
                ) : null

            }
        </div >
    )
}


