export function Todos({todos}) {
    return (
        <>
        {todos.map((todo) => {
            return <div>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                <button onClick={() => {
                    fetch('http://localhost:3000/completed', {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ id: todo._id })
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Failed to mark todo as done");
                        }
                        return response.json(); // if your backend sends JSON
                    })
                    .then(data => {
                        alert("Todo marked as Done");
                    })
                    .catch(error => {
                        console.error("Error:", error);
                        alert("Something went wrong");
                    });                    
                }}>{todo.isDone == true ? 'Done' : 'Mark as Done'}</button>
            </div>
        })}
        </>
    )
}