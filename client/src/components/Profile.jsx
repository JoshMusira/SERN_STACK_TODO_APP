import './profile.css'
import userAvator from '../assets/userAvator.webp'
import { useSelector } from "react-redux";

export default function Profile() {

    const {userName, email, id} = useSelector((state) => state.user);

    return (
        <div className='profile'>
            <div className="userAvator">
                <img className='userAvator-img' src={userAvator} alt="no_pic" />
            </div>
            <div className="user-Details">
                <h2>Username</h2>
                <p>{userName}</p>
                <h2>Email</h2>
                <p>{email}</p>
                <h2>User-Id</h2>
                <p>{id}</p>
            </div>
        </div>
    )
}
