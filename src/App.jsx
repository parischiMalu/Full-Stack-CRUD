import { useState } from 'react';

import NavBar from './components/Navbar';
import TableList from './components/Tablelist';
import ModelForm from './components/ModelForm';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modelMode, setIsModelMode] = useState('add');

  const handleisOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = () => {
    if (modelMode === 'add') {
      console.log('Model mode add');
    } else {
      console.log('Model mode edit');
    }
  }

  return (
    <>
      <NavBar onOpen = {() => handleOpen('add')}/>
      <TableList />
      <ModelForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default App
