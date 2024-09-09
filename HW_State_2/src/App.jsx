import './App.css'
import Product from './components/Product';
import watch from './assets/watch.jpg';

function App() {
  return (
    <>
    <div>
      <Product 
        image={watch}
        description="Smart Watch"
        price={89.99} 
      />
    </div>
    </>
  )
}

export default App
