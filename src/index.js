import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 className="header">Fast React Pizza co.</h1>
    </header>
  );
}

function Menu() {
  const pizzasLength = pizzaData.length;
  return (
    <main className="menu">
      <h1>Our Menu</h1>
      {pizzasLength > 0 ? (
        <>
          <p>Authentic Italian cuisine</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                name={pizza.name}
                ingredients={pizza.ingredients}
                photoName={pizza.photoName}
                price={pizza.price}
                key={pizza.name}
                soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className={`pizza ${props.soldOut && "sold-out"}`}>
      <img src={props.photoName} alt="Spinaci Pizza" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "SOLD OUT" : props.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 9;
  const closeHour = 21;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
