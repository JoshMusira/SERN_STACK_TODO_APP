import './sidenav.css'
import { FaUserTie } from 'react-icons/fa'
import { AiFillFileAdd } from 'react-icons/ai'
import { TfiViewListAlt } from 'react-icons/tfi'
//using Redux
import { profile, addTodo, viewTodo } from "../redux/NavigationSlice";
import { useDispatch } from "react-redux";

export default function Sidenav() {
   const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(addTodo({bar:'addTodo'}));
    }
    const handleView = () => {
        dispatch(viewTodo({bar:'viewTodo'}));
    }
    const handleProfile = () => {
        dispatch(profile({bar:'profile'}));
    }
    return (
        <div className='sidenav'>
            <div className="sidenav_wrapper">
                <div className="sidenav_title" onClick={handleProfile}><FaUserTie className='icon' /> Profile</div>
            </div>
            <div className="sidenav_wrapper">
                <div className="sidenav_item" onClick={handleAdd}><AiFillFileAdd className='icon2' />Add Todo</div>
                <div className="sidenav_item" onClick={handleView}><TfiViewListAlt className='icon2' />View Todo</div>
            </div>

        </div>
    )
}