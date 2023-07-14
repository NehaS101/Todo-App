import React,{useState} from 'react';

const CreateTodo = ({onCreate}) =>{
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const todo = {
            id:Date.now(),
            title,
            description,
            completed:false,
        };
        onCreate(todo);
        setTitle('');
        setDescription('');
    }
    return (
<div>
        <h2>Create New Todo</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Title' value ={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>       
            <button type="submit">Add Todo</button>
        </form>
</div>
    );
}


export default CreateTodo;