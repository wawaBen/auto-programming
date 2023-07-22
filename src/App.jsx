import './App.css'
import BasicButtons from './components/BasicButton/BasicButton'
import BasicModal from './components/BasicModal/BasicModal'
import { useState } from 'react';


function App() {
  const [open, setOpen] = useState(false);
  const [typeForm, setTypeForm] = useState("DCU102")
  const handleOpen = (typeForm) => {
    setOpen(true)
    setTypeForm(typeForm)
  };
  const handleClose = () => setOpen(false);


  return (
    <div className='container'>
      <h1>AUTO PROGRAMMING</h1>
      <div className='group-button'>
        <BasicButtons color={"error"} text={"DCU102"} handleOpen={() => handleOpen('DCU102')} />
        <BasicButtons text={"SID208"} handleOpen={() => handleOpen('SID208')} />
      </div>
      <BasicModal open={open} handleClose={handleClose} typeForm={typeForm} />
    </div>
  )
}

export default App
