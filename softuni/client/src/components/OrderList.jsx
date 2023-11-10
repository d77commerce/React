import Order from './Order';
import './Order.css';

export default function OrderList({ orders }) {
    return (
        <div className="order-container">
            {orders.map((o) => (
                <Order key={o.id} {...o} />
            ))}
        </div>
    );
}