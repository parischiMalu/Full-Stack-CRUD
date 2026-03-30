import { useState } from "react"

export default function ModelForm({isOpen, onClose, mode, onSubmit}) {
  
  const [rate, setRate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [status, setStatus] = useState(false);

  const handleStatusChange = (e) =>{
    setStatus(e.target.value === 'Active');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  }
  
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-xl py-4 px-2">{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
          <form method="dialog" onSubmit={handleSubmit}>
            {/* if there is a button in form, it will close the modal */}

              <label className="w-full label input-bodered my-4flex items-center gap-2">
                <input type="text" className="grow pl-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
              </label>
              <label className="label input-bodered my-4 flex items-center gap-2">
                
                <input type="text" className="grow pl-2" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </label>
              <label className="label input-bodered my-4 flex items-center gap-2">
               
                <input type="text" className="grow pl-2" placeholder="Job " value={job} onChange={(e) => setJob(e.target.value)}/>
              </label>

              <div className="flex mb-4 justify-between">
                <label className="label flex items-center gap-2">
                  
                  <input type="number" className="grow pl-2 w-1/2" placeholder="Rate" value={rate} onChange={(e) => setRate(e.target.value)}/>
                </label>
                <select value={status ? 'Active' : 'Inactive'} className="select w-1/2 max-w-xs" onChange={handleStatusChange}>
                  <option>Inactive</option>
                  <option>Active</option>
                </select>
              </div>
            
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
            <button type="submit" className="btn btn-success ml-2"> {mode === 'edit' ? 'Save Changes' : 'Add Client'}</button>
          </form>          
        </div>
      </dialog>
    </>
  )
}
