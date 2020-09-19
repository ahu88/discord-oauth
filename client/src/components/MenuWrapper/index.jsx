//render page for MenuPage, decoupled from index.jsx in MenuPage
import React from "react";
import { Link } from "react-router-dom";

export function MenuComponent({ guilds }) {
  return (
    //dynamic rendering/iterate through guilds array
    <div>
      <h1>Hello</h1>
      {guilds.map((guild) => (
        //add a component here to make it look nice
        <div>
          <li>{guild.name}</li>
          <Link to={`/dashboard/${guild.id}`}>View Dashboard</Link>
        </div>
      ))}
    </div>
  );
}
