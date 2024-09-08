import Card from './Card';
import Guitar from '../assets/Guitar.jpg';

const ProductList = () => {
  const products = [
    { id: 1, image: {Guitar}, title: "Guitar", price: "20", oldPrice: "30", description: "Description for product 1" },
    { id: 2, image: {Guitar}, title: "Product 2", price: "25", description: "Description for product 2" },
    { id: 3, image: {Guitar}, title: "Product 3", price: "15", oldPrice: "20", description: "Description for product 3" }
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          oldPrice={product.oldPrice}
          description={product.description}
          onAddToCart={() => console.log(`Added ${product.title} to cart`)}
        />
      ))}
    </div>
  );
};

export default ProductList;
