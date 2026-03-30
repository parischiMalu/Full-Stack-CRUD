import { useState } from 'react';
import axios from  'axios';

import NavBar from './components/NavBar';
import TableList from './components/TableList';
import ModelForm from './components/ModelForm';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modelMode, setModelMode] = useState('add');
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpen = (mode) => {
    setModelMode(mode);
    setIsOpen(true);
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
      <NavBar onOpen = {() => handleOpen('add')} onSearch={setSearchTerm}/>
      <TableList handleOpen={handleOpen} searchTerm={searchTerm}/>
      <ModelForm 
        isOpen={isOpen}  onSubmit={handleSubmit}
        onClose={() => setIsOpen(false)} 
        mode={modelMode}
      />
    </>
  )
}

export default App
