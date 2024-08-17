import React, { Component } from 'react'; 

export default class MyComponent extends Component {
    showAlert(msg) {
        alert(msg);
    }

    onClickButtonOK = () => {
        this.showAlert('Hello');     
    }

    render() {
        return <button onClick={this.onClickButtonOK}>
            OK</button>;
    }
}