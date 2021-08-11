import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            Edit Expense with id {}
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log(expense);
                }}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    console.log(props.match)
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);