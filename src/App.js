import React, { useState, useEffect } from "react"
import "./app.css"
const BASE_API = "https://api.giphy.com/v1/gifs/random?api_key=neBl3yJ7hbNGSeE3ntN8yIvcm3djTzGa&tag=&rating=g"
//const BASE_API1="https://api.giphy.com/v1/gifs/search?api_key=neBl3yJ7hbNGSeE3ntN8yIvcm3djTzGa&q=rainbow&limit=25&offset=0&rating=g&lang=en"
function App() {
  const [gif, setGif] = useState();
  const[value,setValue]=useState("rainbow");
  const[fvalue,setFvalue]=useState('rainbow')
  const[gif1,setGif1]=useState();

  
  useEffect(() => {
    fetch(BASE_API)
      .then(res => res.json())
      .then(data => {
       

        setGif(data.data.images.original.url)
      })
  }, [])
 
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=neBl3yJ7hbNGSeE3ntN8yIvcm3djTzGa&q=${fvalue}&limit=50&offset=0&rating=g&lang=en`)
      .then(res => res.json())
      .then(data => {
       

       setGif1(data.data[0].images.original.url)
        console.log(gif1)
      })

  const handleClick = event => {
    event.preventDefault();
    setFvalue(value)
    // 👇️ value of input field
    console.log('handleClick 👉️', value);
   
  };
  const handleChange = event => {
    setValue(event.target.value);

  };
  console.log(gif)
  console.log(value)
  return (
    <div className="App">
      <div className="total">
      <div className="first">
        <h1>Random Gifs</h1>
        <img src={gif} alt="" />
       
      </div>
      <div className="second">
        <h1>Search for Gifs</h1>
        <input type="text" id="value" name="value" value={value} onChange={handleChange}/>
      <button onClick={handleClick}>Boom💥</button>
      <img src={gif1} alt="" />
      <h3>Showing {fvalue} gifs</h3>
      </div>
      </div>
    

    </div>
  );
}

export default App;