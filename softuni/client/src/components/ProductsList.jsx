import ProductListItems from './ProductListItems';

function ProductsList({ products }) {
  return (
    <div className='product-list'>
      {products.map((p) => (
       <ProductListItems key={p.id} {...p} />
      ))}
    </div>
  );
}
export default ProductsList;