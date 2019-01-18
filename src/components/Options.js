import React from 'react';
import Option from './Option';

const Options = (props) => (       
        <div>
        {props.options.length === 0 && <p className="widget__message">Add activities to get started</p>}
        {props.options.length === 1 && <p className="widget__message">Add at least one more activity to get started</p>}
        
        <div className="widget-header">
        <h3 className="widget-header__title"> Your options </h3> 

        <button className="button button--link" onClick={props.handleRemoveAll}> Remove all </button>       
        </div>


        {props.options.map((option) => <Option key = {option} optionText = {option} handleDeleteOption = {props.handleDeleteOption} />)}

        </div>
    );
    
export default Options;