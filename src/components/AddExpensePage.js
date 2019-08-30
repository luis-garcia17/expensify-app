import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense); //We do this because this way the component is more testable, the addExpense function would be difficult to test.
        this.props.history.push('/');
    };

    render() {
        return (
                <div>
                    <div className="page-header">
                        <div className="content-container">
                            <h1 classname="page-header__title">Add expense</h1>                        
                        </div>
                    </div>
                    <div className="content-container">
                        <ExpenseForm onSubmit={this.onSubmit} />   
                    </div>
                </div>
            );
        }
    };

const mapDispatchToProps = (dispatch) => ({
        startAddExpense: (expense) => dispatch(startAddExpense(expense))  
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

/* For some reason the parenthesis after return inside of render has to be inline with the return keyword, otherwise the jsx is not recognized */