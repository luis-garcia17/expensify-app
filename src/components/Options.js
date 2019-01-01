import React from 'react';
import Option from './Option';

const Options = (props) => (       
        <div>
        {props.options.length === 0 && <p>Add activities to get started</p>}
        {props.options.length === 1 && <p>Add at least one more activity to get started</p>}
        
        Your options here: <a onClick={props.handleRemoveAll} href="#">Remove all</a>
        <br/>
        ------------------
        {props.options.map((option) => <Option key = {option} optionText = {option} handleDeleteOption = {props.handleDeleteOption} />)}
        </div>
    );
    
export default Options;