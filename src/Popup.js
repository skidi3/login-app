import React from "react";
class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <button onClick={this.props.closePopup}>
            <i class="close icon big"></i>
          </button>
          <h1>Welcome, Nikhil!</h1>
        </div>
      </div>
    );
  }
}

export default Popup;
