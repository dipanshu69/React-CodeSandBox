import { useState } from "react/cjs/react.production.min";
import "./styles.css";

const arr = ["Play cricket", "Play video Game", "read Book"];

export default function App() {
  const [element, setElement] = useState(arr);

  const handleDelete = (id) => {
    let newItem = [...arr];
    newItem.splice(id, 1);
    setElement(newItem);
  };

  return (
    <div className="App">
      <ol>
        {element.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button
                style={{ margin: "5px" }}
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
