import { useState } from 'react'
import './App.css'
import { Card } from './components/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(pre => !pre);
  }
  return (
    <div className='container'>
      <h1> Cárdapio </h1>
      <div className="buutons">
        <button onClick={handleOpenModal}> Adicionar novo item</button>

      </div>
      <div className='card-grid'>
        {data?.map(food => <Card
          title={food.title}
          image={food.image}
          price={food.price}
        />)}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
    </div>
  )
}

export default App
