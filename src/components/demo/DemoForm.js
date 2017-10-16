import React, { Component } from 'react';
import TextInput from '../shared/TextInupt';

class DemoForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {          
          error: '',
          textInputValue: ''
        };
        
        this.updateInputStateChange = this.updateInputStateChange.bind(this); //binding the 'this' to the component instance
        this.onBlurHandler = this.onBlurHandler.bind(this);
    }

    errorMessage = 'Max 13 characters ! ';

    updateInputStateChange = (event) => {        
        let inputValue = event.target.value;
        this.setState({textInputValue: inputValue});
    }

    onBlurHandler = (event) => {
        let inputValue = event.target.value;
        if (inputValue.length > 13) {
            this.setState({error: this.errorMessage});
        }
        else {
            this.setState({error: null});
            this.setState({textInputValue: inputValue.padEnd(13, '0000000000000')});
        }
    }

    render() {
      const {textInputValue, error} = this.state;
      const {updateInputStateChange, onBlurHandler} = this;
      return (
          <form>
              <div>
                  <h1>Hello From My Awesome App</h1>
                  <br />
                  <h2>Please enter a value here</h2>
                  <TextInput name='demo-input' label='Demo Input' value={textInputValue} onChange={updateInputStateChange} onBlur={onBlurHandler} error={error} />
              </div>
          </form>
      );
    }
  }
  
  export default DemoForm;