import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {
        state = {
            options : []
        }

        handlePick = () => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const optionChosen = this.state.options[randomNum];
            alert(optionChosen);
        }
    
        handleRemoveAll = () => {
            this.setState(() => ({ options: [] }));
        }
    
        handleDeleteOption = (optionToRemove) => {
            this.setState( (prevState) => ({ options: prevState.options.filter( option => optionToRemove !== option )}));
        }
    
        handleAddOption = (option) => {
            if (!option) {
                return 'Enter valid value to add item';
              } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
              }
            this.setState((prevState) => ({options: prevState.options.concat(option)}));
        }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({options})); //options: options is the same as options
            }        
        } catch (e) {
            //do nothing
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log(`Component will unmount`);
    }

    render() {
        const subtitle = `Let technology make your decisions`;

        return (
            <div>
            <Header subtitle = {subtitle} />
            <Action hasEnoughOptions = {this.state.options.length >= 2} handlePick = {this.handlePick} />
            <Options options = {this.state.options} handleRemoveAll = {this.handleRemoveAll} handleDeleteOption = {this.handleDeleteOption}/>
            <AddOption handleAddOption = {this.handleAddOption} />
            </div>
        );
    }
}
