import React, { Component } from "react";

import Form from "./components/Form";
import FormImperial from "./components/FormImperial";
import Message from "./components/Message";
import { calculateBmi } from "./helpers/bmiHelper";
import MethodSelect from "./components/MethodSelect";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  render() {
    return (
      <div>
        <MethodSelect>
          <Form
            weight={this.state.weight}
            height={this.state.height}
            onChangeHandler={this.onChangeHandler}
            onSubmitHandler={this.onSubmitHandler}
          />
          <FormImperial
            weight={this.state.weight}
            height={this.state.height}
            onChangeHandler={this.onChangeHandler}
            onSubmitHandler={this.onSubmitHandler}
          />
        </MethodSelect>
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
          />
        )}
      </div>
    );
  }
}

export default App;