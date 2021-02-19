import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function ECStoreModifyView({itemState, appPrefs, 
	onSave, onCancel, inputChange}) {
    
	let formName = "PM_EC_STORE_FORM";
	let formTitle = "Store Item";
	let formGroup = "FORM1";
    
    return (
    	<FormBuilder itemState={itemState} formName={formName} formTitle={formTitle} formGroup={formGroup} appPrefs={appPrefs} onSave={onSave} onCancel={onCancel} inputChange={inputChange}/>
    );
}


LanguageModifyView.propTypes = {
  itemState: PropTypes.object.isRequired,
  appPrefs: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired
};
