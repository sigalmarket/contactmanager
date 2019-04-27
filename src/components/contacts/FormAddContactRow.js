import React, { Component } from "react";

class FormAddContactRow extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor={this.props.name}>{this.props.label}</label>
          <input
            type={this.props.type}
            name={this.props.name}
            className="form-control form-control-lg"
            placeholder={this.props.placeholder}
            value={this.props.val}
            onChange={this.props.onChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default FormAddContactRow;
