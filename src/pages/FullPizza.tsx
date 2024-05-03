import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{ imageUrl: string; title: string; price: number }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://64e36310bac46e480e78b878.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
        navigate('/');
      }
    }

    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className='container'>
      <img src={pizza.imageUrl} className='full-pizza-image' alt={pizza.title} />
      <h2 className='full-pizza-title'>{pizza.title}</h2>
      <h4 className='full-pizza-price'>{pizza.price} р.</h4>
      <Link to='/' className='full-pizza-link'>
        <button className='button button--outline button--add'>
          <span>На главную страницу</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
