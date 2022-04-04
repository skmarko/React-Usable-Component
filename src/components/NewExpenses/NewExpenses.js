import './NewExpenses.css';
import React from 'react';
import ExpensesForm from './ExpensesForm';
const NewExpenses =(props)=>{
    const saveExpenseHander = (enterExpenseData)=>{

        const expenseData ={
            ...enterExpenseData,
            id:Math.random().toString()
        }

props.onAddExapense(expenseData);
        console.log(expenseData);
    }

    return(

        <div className='new-expense'>
<ExpensesForm onSaveExpenseData= {saveExpenseHander }/>
        </div>
    )
}
export default NewExpenses