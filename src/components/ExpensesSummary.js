import React from 'react';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span> {expenseCount} </span> {expenseWord} with a total of <span> {formattedExpensesTotal} </span></h1>
                <div className="page-header__actions">
                    <Link to="/create" className="button">Add expense</Link>                
                </div>
            </div>
        </div>
    );   
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);

// I used the props parameter on the stateless functional component but Andrew did it by destructuring the props object. 

