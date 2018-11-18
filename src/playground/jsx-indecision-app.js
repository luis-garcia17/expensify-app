console.log(`app.js is running`);

// JSX - Javascript XML
const appRoot = document.querySelector(`#app`);


const app = {
    title: `Indecision app`,
    subtitle: `Let technology do decisions for you`,
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = ``;
        renderIndecisionApp();
    }
};

const makeDecision = () => {
const randomNum = Math.floor(Math.random() * app.options.length);
const option = app.options[randomNum];
alert(option);
};

const removeAll = () => {
    app.options = []; 
    renderIndecisionApp(); 
};

const renderIndecisionApp = () => {
    const template = (
        <div> 
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? `Here are your options` : `There are no options`}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol> 
               {app.options.map((option) => <li key={option}>{option}</li>)} 
            </ol>
            <form onSubmit={onFormSubmit}> {/*This "onFormSubmit" is a reference whereas "onFormSubmit()" would be a function call and it would return undefined.*/}
            <input type="text" name="option"/> <button> Add options </button>
            </form>
        </div> 
        );
        ReactDOM.render(template, appRoot);
};

renderIndecisionApp();