import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Container } from "@material-ui/core";
import Header from "./components/header/Header";
import Definition from "./components/Definition.js/Definition";

const apiEndPoint = "https://api.dictionaryapi.dev/api/v2/entries/";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");

  const dictionaryApi = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setMeanings(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dictionaryApi(`${apiEndPoint}${category}/${word}`);
  }, [category, word]);

  return (
    <div
      className="App"
      style={{ color: "white", height: "100vh", backgroundColor: "#171717" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        <br />
        <br />
        <br />

        <Definition word={word} meanings={meanings} category={category} />
      </Container>
    </div>
  );
}

export default App;
