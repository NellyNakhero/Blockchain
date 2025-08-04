import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blockchain from './component/Blockchain'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([
    {id: 1, name: "Lisk", users: 10000},
    {id: 2, name: "Base", users: 90000},
    {id: 3, name: "Solana", users: 10000},
    {id: 4, name: "Somnia", users: 10000},
  ]);
  const [newItem, setNewItem] = useState("");
  const [newQuantity, setNewQuantity] = useState(1);


  const handleAddItem = () => {
    if(newItem.trim() == "") return;

    const newGrocery = {
      id: Date.now(),
      name: newItem,
      quantity: Number(newQuantity)
    }

    setItems([...items, newGrocery])
    setNewItem("");
    setNewQuantity(1);
  }

  const handleDeleteItem = (id) => {
    const filtered = items.filter((item) => item.id != id)
    setItems(filtered);
  }


  return (
    <>
      <div className="app-container">
        <h1>Popular Blockchains</h1>
        <div className="input-row" >
          <input type="text" placeholder="Enter Item" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
          <input type="number" value={newQuantity} onChange={(e) => setNewQuantity(e.target.value)} />
          <button onClick={handleAddItem}>Add Item</button>
        </div>

        <div>
          {items.length === 0? <p>Blockchain list is empty</p> : <div>
              <h1>Welcome to Web3</h1> 

              <ul className="item-list" >
                {items.map((item) => (
                  <Blockchain key={item.id} name={item.name} quantity={item.users} onDelete={() => handleDeleteItem(item.id)} />
                ))}
              </ul>
            </div>}
          
          
        </div>
      </div>
    </>
  )
}

export default App
