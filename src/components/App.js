import React, {useState, useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setOutputValue(inputValue ** 2);
  }, [inputValue]);

  return (
    <div id="main">
      <ChildComponent>
        <input id='input' onChange={handleInputChange} />
      </ChildComponent>
      <p id='output'>{outputValue}</p>
    </div>
  )
}

export default App;
