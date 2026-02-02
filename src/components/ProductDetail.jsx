import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    navigate("/products");
                    return;
                }
                return response.json();
            })
            .then(data => setProduct(data))
            .catch(() => navigate("/products"));
    }, [id, navigate]);

    if (!product) {
        return <div>Caricamento...</div>;
    }
    return (
        <div>
            <button onClick={() => navigate("/products")}>Torna ai Prodotti</button>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>

            <div className="bottoni-dettaglio">
                <button onClick={() => navigate("/cart")}>Aggiungi al Carrello</button>
                <button onClick={() => navigate("/checkout")}>Vai al Checkout</button>
            </div>




        </div>
    );
}
export default ProductDetail;
