import React from 'react';
import Card from './components/Card';
import CardImage from './components/CardImage';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='container'>
      <Card
        title='Card title'
        content="Some quick example text to build on the card title and make up the bulk of the card's content."
        btnText='Go somewhere'
        >
        <CardImage src="/ra-cards/img/Ellie.png" alt="girl with guitar" />
      </Card>
      <Card
        title='Special title treatment'
        content='With supporting text below as a natural lead-in to additional content.'
        btnText='Go somewhere'
        >
      </Card>
    </div>
  );
}

export default App;
