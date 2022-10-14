import "../css/styles.css"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data.js"

function App() {

  const cards = data.map(card => {
    return <Card 
      card={card}
    />
  })

  return (
    <div className="container">
      <Header />
      {cards}
      
    </div>
  )
}

export default App
