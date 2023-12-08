import ToDoElement from "./ToDoElement";
 export const D_ToDo = [    
        "Get up",
        "Brush teeth",
        "Shower",
        "Get dressed",
        "Go to work"
    ];
export default function ToDoList() {
    return (
        <div >
           <ul>
          {D_ToDo.map((el)=><ToDoElement key={el} todo={el} />)}
            </ul>  
        </div>
    )
}