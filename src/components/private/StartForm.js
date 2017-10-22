import React from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';
import { RaisedButton } from 'material-ui';
import PropTypes from 'prop-types';
// import { MenuItem, SelectField, DatePicker } from 'material-ui';

const styles = {
  mainButton: {
    marginTop: 20,
    padding: 5,
    margin: 'auto',
    display: 'block',
  },
  mainButtonLabel: {
    textTransform: 'none',
  },
};

class StartForm extends React.Component {
  state = {
    formData: {
      year: '',
      make: '',
      model: '',
      description: '',
    },
  };

  /**
   * Leverages react-material-ui-form-validator for form validation
   * If there's an invalid field or a required field hasn't been filled out
   * fail the validation
   */
  isValid = () => {
    if (!this.state.formData.year || !this.state.formData.make ||
      !this.state.formData.model || !this.state.formData.description) {
      return false;
    }
    return !this.formRef.childs.some(child => !child.state.isValid);
  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit = () => {
    if (!this.isValid()) {
      console.log('not valid job');
      return;
    }
    this.props.createJob(this.state.formData);
  }

  render() {
    const { formData } = this.state;
    return (
      <div>
        <ValidatorForm
          ref={(r) => { this.formRef = r; }}
          onSubmit={() => {}} // not needed, we use button to submit
        >
          <TextValidator
            floatingLabelText="Step 1: Year"
            onChange={this.handleChange}
            name="year"
            type="text"
            value={formData.year}
            fullWidth={true}
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <br />
          <TextValidator
            floatingLabelText="Step 2: Make"
            onChange={this.handleChange}
            name="make"
            type="text"
            value={formData.make}
            fullWidth={true}
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <br />
          <TextValidator
            floatingLabelText="Step 3: Model"
            onChange={this.handleChange}
            name="model"
            type="text"
            value={formData.model}
            fullWidth={true}
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <br />
          <TextValidator
            floatingLabelText="Step 4: Description of Damage"
            onChange={this.handleChange}
            name="description"
            type="email"
            value={formData.description}
            fullWidth={true}
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <br /><br />
          {/* <DatePicker
            hintText="Step 4: Pick your ideal repair date"
            mode="portrait"
            fullWidth={true}
            style={{ marginTop: '5px' }}
          /> */}
        </ValidatorForm>
        <RaisedButton
          label="Start getting quotes"
          secondary={true}
          style={styles.mainButton}
          labelStyle={styles.mainButtonLabel}
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

StartForm.propTypes = {
  createJob: PropTypes.func.isRequired,
};


export default StartForm;
