import React, { Component } from 'react';

import '../styles/AddForm.css'

class AddForm extends Component {
  minDate = new Date().toISOString().slice(0,10);
  state = { 
    text: "",
    prioritize: false,
    date: this.minDate
  }

  handleFormChange = e => {
    if(e.target.type === "checkbox") {
      this.setState({ prioritize: e.target.checked });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const {text, prioritize, date} = this.state;
    let add = false;
    if(text.length > 2) {
      add = this.props.addTask(text, date, prioritize);
    }else {
      alert("Zbyt krótka nazwa zadania. Powinna mieć przynajmniej 3 znaki!")
    }
    if(add) {
      this.setState({ 
        text: "",
        prioritize: false,
        date: "2021-08-17" 
      });
    }
  }

  render() {
    let maxDate = parseInt(this.minDate.slice(0,4)) + 1;
    maxDate = maxDate + "-12-31";
    return ( 
      <div className="add-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">Wpisz treść zadania: <input type="text" id="text" name="text" value={this.state.text} onChange={this.handleFormChange}/></label>
          <label htmlFor="prioritize"><input type="checkbox" name="prioritize" id="prioritize" checked={this.state.prioritize} onChange={this.handleFormChange}/> Priorytet</label>
          <label htmlFor="date">Czas wykonania zadania: <input type="date" name="date" id="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleFormChange}/></label>
          <button>Dodaj</button>
        </form>
      </div>
    );
  }
}
 
export default AddForm;