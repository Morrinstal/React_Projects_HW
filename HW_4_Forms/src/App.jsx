import './App.css'
import Card from './components/Card';
import Form from './components/Form';
import products from "./model/products.json";

function App() {
  return (
    <>
      <div className="product-list">
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          oldPrice={product.oldPrice}
          description={product.description}
        />
      ))}
      </div>
      
      <Form />
    </>
  )
}

export default App
