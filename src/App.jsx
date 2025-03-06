import './App.css';
import TODO from './components/TODO.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
      <TODO />
      <TODO />
      <TODO />
      </div>
      <Modal />
    </div>
  );
}

export default App;
