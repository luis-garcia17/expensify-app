import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.addExpense(expense); //We do this because this way the component is more testable, the addExpense function would be difficult to test.
        this.props.history.push('/');
    };

    render() {
        return (
                <div>
                    <h1>Add expense</h1>
                    <ExpenseForm 
                        onSubmit={this.onSubmit}
                    />   
                </div>
            );
        }
    };

const mapDispatchToProps = (dispatch) => ({
        addExpense: (expense) => dispatch(addExpense(expense))  
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

/* For some reason the parenthesis after return inside of render has to be inline with the return keyword, otherwise the jsx is not recognized */