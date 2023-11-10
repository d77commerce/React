import  "./Order.css";

export default function Order(props) {
  return (
    <div className="order">
      <h1>Order No: {props.No}</h1>
      <p>Task content: {props.task1}</p>
      <p>Task content: {props.task2}</p>
      <p>Task content: {props.task3}</p>
      <h3>Total £ {props.totalSum}</h3>
    </div> 
  );
}
