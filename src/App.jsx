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

// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas"