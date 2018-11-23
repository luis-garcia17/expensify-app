class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        };
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

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const optionChosen = this.state.options[randomNum];
        alert(optionChosen);
    }

    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState( (prevState) => ({ options: prevState.options.filter( option => optionToRemove !== option )}));
    }

    handleAddOption (option) {
        if (!option) {
            return 'Enter valid value to add item';
          } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
          }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
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

const Header = (props) => {
    return (    
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>    
        );
};

Header.defaultProps = {
    title: `Indecision`
};

const Action = (props) => {
        return (
            <div>
            <button onClick={props.handlePick} disabled = {!props.hasEnoughOptions}>What should I do?</button>
            </div>
        );
    };

const Options = (props) => {
    return (       
        <div>
        {props.options.length === 0 && <p>Add activities to get started</p>}
        {props.options.length === 1 && <p>Add at least one more activity to get started</p>}
        
        Your options here: <a onClick={props.handleRemoveAll} href="#">Remove all</a>
        <br/>
        ------------------
        {props.options.map((option) => <Option key = {option} optionText = {option} handleDeleteOption = {props.handleDeleteOption} />)}
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
         {props.optionText}
         <a href="#" onClick={ (e) => {
             props.handleDeleteOption(props.optionText);
         }}>remove</a>
        </div>
        );
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);      
        this.setState(() => ( {error})); //error: error is the same as error 

        if(!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption} action="">
                    <input type="text" name="option" /> <button>Add option</button>
                </form>
            </div>

        );
    }
}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//             <button onClick={this.props.handlePick} disabled = {!this.props.hasOptions}>What should I do?</button>
//             </div>);
//     }
// }

// const User = (props) => {
//     return (
//         <div>
//             <p>name: {props.name}</p>
//             <p>age: {props.age}</p>
//         </div>
//         );
//     };

ReactDOM.render(<IndecisionApp />, document.querySelector(`#app`));



