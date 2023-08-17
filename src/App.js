import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            <PizzaBlock title='Чизбургер-пицца' price={395} />
            <PizzaBlock title='Пицца карбонара' price={500} />
            <PizzaBlock title='Пицца Маргарита' price={495} />
            <PizzaBlock title='Пицца Четыре сыра' price={550} />
            <PizzaBlock title='Пицца Сальмоне' price={600} />
            <PizzaBlock title='Пицца Болоньезе' price={595} />
            <PizzaBlock title='Пицца со страчателлой' price={450} />
            <PizzaBlock title='Пицца мясная' price={560} />
            <PizzaBlock title='Пицца с салями' price={400} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
