import { useState } from 'react'
import styles from './App.module.css'
import { foods } from './Foods'
import { Food } from './Food/Food';

function shouldDisplayFood(food: Food, searchQuery: string) {
  return food.name.toLowerCase().includes(searchQuery.toLowerCase());
}


function App() {
  const [searchQuery, setSearchQuery] = useState("");


  const foodDisplay = foods.filter(food => shouldDisplayFood(food, searchQuery)).map(food => Food(food, searchQuery));

  return (
    <div className={styles.app}>
      <div className={styles.searchBox}>
        <h2 className={styles.searchText}>Search</h2>
        <div>
          <input
            id={styles.searchBoxInput}
            placeholder="Find a food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          >
          </input>
        </div>
      </div>
      <hr className={styles.horizontalLine}></hr>
      <div className={styles.foodList}>
        {foodDisplay}
      </div>
    </div>
  )
}

export default App
