import Calculator from './components/Calculator'
import AlertMessage from './components/AlertMessage';
import { useState } from 'react'
import './App.scss'

function App() {
  const [message, setMessage] = useState(null);
  const [category, setCategory] = useState(null);
  const flashMessage = (message, category) => {
    setMessage(message);
    setCategory(category);
  }

  return(
    <>
      {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
      <div className='container'>
        <Calculator flashMessage={flashMessage}/>
      </div>
    </>
  );

}

export default App;
