import React from "react";
import Form from "./components/Form.js";

const API_KEY = "c59f61f4-3a4e-4afd-8fe0-6b80953740de";
class App extends React.Component {
  //initialize state
  state = {  
    items: []
  };
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const state = e.target.elements.state.value;
    const api_call = await fetch(`https://edmtrain.com/api/events?locationIds=${city},${state}&client=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    //set the values of the state
    this.setState({
      items: data
    });
  }

  render() {
    const itemList = this.state.items.map(
      (item, index) => 
      <li 
        key={index}>
        {item}
      </li>
    )
    return (
      <div>
        <p>Hello!</p>
        <h1>hi</h1>
        <Form getWeather={this.getWeather}/>
      <ul>
        {itemList}
      </ul>
      </div>
    )
  }
}

export default App;