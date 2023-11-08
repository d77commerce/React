
function ProductListItems({name, price, completed}){
    const styles = { color: completed ? 'grey':'red', textDecoration: completed ? 'line-through': 'none' };
    return (
        <div className="product-card">
              <h2 style={styles}>{name} </h2>
              <h3 style={styles}>{price} </h3>
        </div>
    )       
}
export default ProductListItems;