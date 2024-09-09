import Card from './Card';
import Guitar from '../assets/Guitar.jpg';
import Violin from '../assets/Violin.jpg';
import Piano from '../assets/Piano.jpg';

const ProductList = () => {
  const handleAddToCart = () => {
    alert('Product was successfully added to cart!');
  };

  const products = [
    { id: 1, image: Guitar, title: "Guitar", price: "199.99", oldPrice: "289.00", description: "High-quality guitar from USA" },
    { id: 2, image: Violin, title: "Violin", price: "399.99", oldPrice: "189.99", description: 
    "A famous violin from Italy" },
    { id: 3, image: Piano, title: "Piano", price: "159.99", oldPrice: "129.99", description: "Amazing piano from Great Britain" }
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
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
