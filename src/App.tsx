import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App grid-container">
      <div className="grid">
        <h1>Transforming Ideas Into Digital Reality</h1>
        <h2>Example text</h2>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            button example {count}
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
