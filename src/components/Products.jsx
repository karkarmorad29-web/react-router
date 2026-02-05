import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [prodottoScelto, setProdottoScelto] = useState(null);


    useEffect(() => {
        // Fetch products from a mock API
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Errore nel fetch dei prodotti:', error));
    }, []);

    return (
        <div className="flex-container">
            <h1>Prodotti</h1>
            <div className="gap-1">
                {products.map(product => (
                    <div key={product.id} className="card">
                        <img className="card-img" src={product.image} alt={product.title} />
                        <h2 className="card-title">{product.title}</h2>
                        <Link to={`/products/${product.id}`}>Vedi Dettaglio</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default Products;