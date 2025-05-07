import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    return (
    <>
        <div>
            <input type="text" placeholder="Title" onChange={(e) => {
                setTitle(e.target.value);
            }}/>
            <input type="text" placeholder="Description" onChange={(e) => {
                setDescription(e.target.value);
            }}/>
            <button onClick={() => {

                fetch('http://localhost:3000/todo', {
                    method: 'post',
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                .then(() => {
                    alert('Todo created')
                })
            }}>Create Todo</button>
        </div>
    </>
    )
}

