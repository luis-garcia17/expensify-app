class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
        };
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const optionChosen = this.state.options[randomNum];
        alert(optionChosen);
    }

    handleRemoveAll() {
        this.setState(() => ({ options: [] }));
    }

    handleAddOption (option) {
        if (!option) {
            return 'Enter valid value to add item';
          } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
          }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    }

    render() {
        const subtitle = `Let technology make your decisions`;

        return (
            <div>
            <Header subtitle = {subtitle} />
            <Action hasOptions = {this.state.options.length > 0} handlePick = {this.handlePick} />
            <Options options = {this.state.options} handleRemoveAll = {this.handleRemoveAll}/>
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
    title: `Indecision app`
};

const Action = (props) => {
        return (
            <div>
            <button onClick={props.handlePick} disabled = {!props.hasOptions}>What should I do?</button>
            </div>
        );
    };

const Options = (props) => {
    return (       
        <div>
        Your options here: <a onClick={props.handleRemoveAll} href="#">Remove all</a>
        <br/>
        ------------------
        {props.options.map((option) => <Option key = {option} optionText = {option} />)}
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
         {props.optionText}
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
        this.setState(() => {return {error}}); //error: error is the same as error 
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
//cd Documents/Web development/React/indecision-app
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live server


