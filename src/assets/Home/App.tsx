import { useState } from "react";
import Header from "../../Header";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>Transforming Ideas Into Digital Reality</h1>
      <h2>Example text</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          button example {count}
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
