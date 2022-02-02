import Product from './components/Product';
import dress1 from './components/images/dress1.png'
import dress2 from './components/images/dress2.png'
import african1 from './components/images/african1.png'
import suit1 from './components/images/suit1.png'

function App() {
  return (
    <div className='app'>
      <h1>O's Wears</h1>
      <div className="productRow">
        <Product 
          image={dress1}
          name="Google Pixel" 
          desc="Google Phone" 
          price="99.99" 
        />

        <Product 
          image={dress2}
          name="Google Pixel" 
          desc="Google Phone" 
          price="99.99" 
        />

        <Product 
          image={african1}
          name="Google Pixel" 
          desc="Google Phone" 
          price="99.99" 
        />

        <Product 
          image={suit1}
          name="Google Pixel" 
          desc="Google Phone" 
          price="99.99" 
        />
      </div>
    </div>
  );
}

export default App;
