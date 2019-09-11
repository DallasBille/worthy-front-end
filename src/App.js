import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DiamondForm from "./Components/DiamondForm";
import DiamondContainer from "./DiamondList/DiamondContainer";

class App extends React.Component {
  state = {
    diamondList: []
  };

  componentDidMount() {
    this.fetchDiamonds();
  }

  fetchDiamonds = () => {
    fetch(`http://localhost:3000/api/diamonds`)
      .then(res => res.json())
      .then(diamondAPI => {
        this.setState({
          diamondList: diamondAPI
        });
      });
  };

  render() {
    return (
      <div className="App">
        <div className="nav">
          <div className="next-button">
            <a className="next-link" href="#diamond-list">
              <p className="next-text">Recently Auctioned Diamonds</p>
            </a>
          </div>
          <div className="logo">
            <img src="/worthy.png" alt="" />
          </div>
        </div>
        <hr />
        <DiamondForm />
        <DiamondContainer diamonds={this.state.diamondList} />
      </div>
    );
  }
}
export default App;
