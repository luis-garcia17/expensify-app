class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubstractOne = this.handleSubstractOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };
    }

    handleAddOne() {
      this.setState((prevState) => {
          return {
            count: prevState.count + 1
          };
      });
    }
    handleSubstractOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }


    render(){
        return (
            <div>
            <h1>Count: {this.state.count} </h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleSubstractOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.querySelector(`#app`));

//Counter app
// const appTwo = document.getElementById(`app`);
// ReactDOM.render(templateTwo, appTwo);

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const substractOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appTwo = document.getElementById(`app`);
// const renderCounterApp =  () => {
//     const templateTwo = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}> +1 </button>
//         <button onClick={substractOne}> -1 </button>
//         <button onClick={reset}> Reset </button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appTwo);
// };

// renderCounterApp();