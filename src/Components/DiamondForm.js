import React from "react";

class DiamondForm extends React.Component {
  state = {
    carat: "0.90",
    cut: "Round",
    color: "D",
    clarity: "FL",
    message: ""
  };

  seedDataFunction = () => {};

  newDiamondPostRequest = event => {
    event.preventDefault();
    let newIntegerState = {
      carat: parseFloat(this.state.carat),
      cut: this.state.cut,
      color: this.state.color,
      clarity: this.state.clarity,
      sold: parseFloat(this.state.sold)
    };
    return fetch(`http://localhost:3000/api/diamonds`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // Accept: "application/json"
      },
      body: JSON.stringify(newIntegerState)
    })
      .then(res => res.json())
      .then(message => {
        this.setState({
          message: message.message
        });
      });
  };

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  setMessageInHTML = () => {};

  render() {
    return (
      <div className="diamond-form">
        <p className="disclaimer">
          *Disclaimer: This information does not 100% accurately reflect real
          diamond prices. For detailed information, go the worthy.com
        </p>
        <form onSubmit={this.newDiamondPostRequest} action="">
          <label htmlFor="">Carat Weight</label>
          <div>
            <input
              className="carat-input"
              onChange={this.handleFormChange}
              value={this.state.carat}
              name="carat"
              type="number"
              step=".01"
              min="0.50"
              max="1.50"
            />
          </div>
          <label htmlFor="">Cut</label>
          <div className="select-forms">
            <select
              className="select-css"
              onChange={this.handleFormChange}
              value={this.state.cut}
              name="cut"
              form="cutform"
            >
              <option value="Round">Round</option>
              <option value="Princess">Princess</option>
              <option value="Cushion">Cushion</option>
              <option value="Marquise">Marquise</option>
              <option value="Emerald">Emerald</option>
            </select>
          </div>
          <label htmlFor="">Color </label>
          <div className="select-forms">
            <select
              className="select-css"
              onChange={this.handleFormChange}
              value={this.state.color}
              name="color"
              form="colorform"
            >
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
              <option value="K">K</option>
              <option value="L">L</option>
              <option value="M-Z">M-Z</option>
              <option value="Fancy">Fancy</option>
            </select>
          </div>
          <label htmlFor="">Clarity</label>
          <div className="select-forms">
            <select
              className="select-css"
              placeholder="Clarity"
              onChange={this.handleFormChange}
              value={this.state.clarity}
              name="clarity"
              id=""
            >
              <option value="FL">FL</option>
              <option value="IF"> IF</option>
              <option value="VVS1">VVS1</option>
              <option value="VVS2">VVS2</option>
              <option value="VS1">VS1</option>
              <option value="VS2">VS2</option>
              <option value="SI1">SI1</option>
              <option value="SI2">SI2</option>
              <option value="I1">I1</option>
              <option value="I2">I2</option>
              <option value="I3">I3</option>
            </select>
          </div>
          <div className="submit-div">
            <input className="submit-button" type="submit" value="Submit" />
          </div>
        </form>

        {this.state.message.length !== "" ? (
          <div className="return-value">{this.state.message}</div>
        ) : (
          <div>Sorry, we couldn't calculate the cost of your diamond.</div>
        )}
      </div>
    );
  }
}
export default DiamondForm;
{
}
