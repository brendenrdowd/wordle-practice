import { useEffect, useState } from "react";
import "./App.css";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Pordle</h2>
        <Wordle solution={solution} />
        {/* {times.map((_, index) => (
        <Row key={index} />
      ))} */}

        {/* <div class="row">
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
        </div>
        <div class="row">
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
        </div>
        <div class="row">
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
        </div>
        <div class="row">
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
        </div>
        <div class="row">
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
          <div class="letterSq"></div>
        </div> */}
      </header>
    </div>
  );
}

export default App;
