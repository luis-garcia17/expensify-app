class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            title: `Visibility toggle`,
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.title} </h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? `Hide details` : `Show details`}</button>
                {this.state.visibility && <div>This is the hidden text</div>}
            </div>
        );
    }
}



ReactDOM.render(<VisibilityToggle />, document.getElementById(`app`));

// let visibility = false;

// const visibilityToggle = () => {
// console.log(`button clicked`);
// visibility = !visibility;
// render();
// };

// const render = () => {
//     const template = (
//         <div>
//         <h1>Visibility toggle</h1>
//         <button onClick={visibilityToggle}>{visibility ? `Hide details` : `Show details`}</button>
//         {visibility && <div><p>This is the hidden text</p></div>}
//         {/*visibility ? <div><p>This is the hidden text</p></div> : undefined*/}
//         </div>
//     );
//     ReactDOM.render(template, document.querySelector(`#app`));
// }

// render();
