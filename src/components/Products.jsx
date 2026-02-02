import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [prodottoScelto, setProdottoScelto] = useState(null);

    useEffect(() => {
        // Fetch products from a mock API
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);


    return (
        <div className="products-container">
            <h1>I nostri prodotti</h1>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <Link to={`/products/${product.id}`}>Vedi Dettaglio</Link>
                    </div>
                ))}
            </div>

            {prodottoScelto && (
                <div className="product-detail-modal">
                    <h2>{prodottoScelto.title}</h2>
                    <img src={prodottoScelto.image} alt={prodottoScelto.title} />
                    <p>{prodottoScelto.description}</p>
                    <p className="price">€{prodottoScelto.price}</p>
                    <button onClick={() => setProdottoScelto(null)}>Chiudi</button>
                </div>
            )}

        </div>
    );
}
export default Products;