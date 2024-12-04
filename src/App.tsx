import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Candidates } from "./types/Candidates";
import apiClient from "./api/apiClient";

function App() {
  const [data, setData] = useState(Array<Candidates>);
  useEffect(() => {
    apiClient
      .get("/candidates")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <table>
        <th>ID:</th>
        <th>Kategoria:</th>
        <th>Kezdés:</th>
        <th>Vége:</th>
        <th>Szavazatok:</th>
        {data.map((c) => (
          <tr>
            <td>{c._id}</td>
            <td>{c.category.name}</td>
            <td>{c.category.start}</td>
            <td>{c.category.end}</td>
            <td>{c.votes}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default App;
