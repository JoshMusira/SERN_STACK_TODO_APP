
import { useEffect, useState } from 'react'
import { apiDomain } from '../utils/utils'
import axios from 'axios'
import './updateform.css'
import { useSelector } from 'react-redux'

const UpdateForm = ({ setShowEditForm, todo, getTodos }) => {
    const [description, setDescription] = useState('')

    useEffect(() => {
        setDescription(todo.description)
    }, [])


    const user = useSelector((state) => state.user);
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`${apiDomain}/todo/${todo.id}`, { description: description },
            { headers: { "Authorization": `${user.token}` } }
        ).then((res) => {
            getTodos()
            alert(res.data.message)

        }).catch(({ response }) => {
            alert(response.response.data.error)
        })
    }
    return (
        <div className='updateForm'>
            <form className='form'>
                <textarea
                    value={description} onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    id="description"
                ></textarea>
                <div className="btn-wrapper">
                    <button onClick={() => setShowEditForm(false)}>exit</button>
                    <button type='submit' onClick={handleSubmit}>Add</button>
                </div>
            </form>
        </div>
    )
}
export default UpdateForm