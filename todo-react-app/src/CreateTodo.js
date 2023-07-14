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
        
</div>
    );
}


export default CreateTodo;