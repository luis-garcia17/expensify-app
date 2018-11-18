let visibility = false;

const visibilityToggle = () => {
console.log(`button clicked`);
visibility = !visibility;
render();
};

const render = () => {
    const template = (
        <div>
        <h1>Visibility toggle</h1>
        <button onClick={visibilityToggle}>{visibility ? `Hide details` : `Show details`}</button>
        {visibility && <div><p>This is the hidden text</p></div>}
        {/*visibility ? <div><p>This is the hidden text</p></div> : undefined*/}
        </div>
    );
    ReactDOM.render(template, document.querySelector(`#app`));
}

render();