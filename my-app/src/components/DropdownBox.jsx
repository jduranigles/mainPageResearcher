import React, { Component } from 'react';

class DropdownBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedOption: null,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  selectOption = (option) => {
    this.setState({ selectedOption: option, isOpen: false });
  };

  render() {
    const { isOpen, selectedOption } = this.state;
    const options = ["Option 1", "Option 2", "Option 3"]; // Replace with your options

    return (
      <div className="dropdown-box">
        <div className={`dropdown ${isOpen ? "open" : ""}`} onClick={this.toggleDropdown}>
          {selectedOption ? selectedOption : "Select an option"}
        </div>
        {isOpen && (
          <ul className="dropdown-options">
            {options.map((option, index) => (
              <li key={index} onClick={() => this.selectOption(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default DropdownBox;
