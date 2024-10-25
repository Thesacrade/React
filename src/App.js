import { useState } from 'react';
import Color from './Color'
import Input from './Input';

function App() {
  const [colorName, setColorName] = useState('')  
  Color.defaultProps = {
    colorValue : "Empty Color Value"
  }
  
  return (
    <div className="App"> 
    <Color
    colorValue={colorName}/>
    <Input
    colorName={colorName}
    setColorName={setColorName}/>
     
    </div>
  );
}

export default App;
