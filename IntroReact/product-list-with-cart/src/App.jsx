import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dessert from './components/dessert/Dessert'

function App() {
  const [menu, setMenu] = useState([
    { id: 1, price:100, foodName: "Waffle", foodDescription:"Waffle with Berries", foodImage: "https://www.fridaycakenight.com/wp-content/uploads/2015/12/Waffles1-745x1024.jpg"},
        { id: 1, price:100, foodName: "Waffle", foodDescription:"Waffle with Berries", foodImage: "https://www.fridaycakenight.com/wp-content/uploads/2015/12/Waffles1-745x1024.jpg"}

  ])

  return (
    <>
      <div className="body-container">
        <h1>Desserts</h1>

        {/* dessert lists */}
        <div>
          {menu.map((item) => (
            <Dessert key={item.id} imgUrl={item.foodImage} foodName={item.foodName} foodDescription={item.foodDescription} foodPrice={item.price} />
          ) )}
        </div>
      </div>
    </>
  )
}

export default App
