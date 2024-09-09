export function DisplayTodo({todo}){
    return(
        <div>
            <br></br>
            <div>{todo[0].title}</div>
            <div>{todo[0].description}</div>
            <div>{todo[0].completed==true ? "completed" : "mark as done"}</div>
        </div>
    )
}