import React from 'react'
import './ExpensesForm.css';
import { useState } from 'react';


const ExpensesForm =(props)=>{

const [enterTitle ,setEnterTitle]= useState('');
const [enterPrice , setEnterPrice]=useState('');
const [enterDate,setEnterDate] =useState('');
    
    const NewFormtitlehand = (event)=>{
        setEnterTitle(event.target.value)
    };

    const NewFormPricehand=(event)=>{
        setEnterPrice(event.target.value)};

    const NewFormDatehand =(event)=>{
        setEnterDate(event.target.value)};

        const submitHandle = (event)=>{
            event.preventDefault();

        

        const expenseData ={
            title:enterTitle,
            price:enterPrice,
            date:new Date(enterDate)
            
        }
        
        props.onSaveExpenseData(expenseData)

        console.log(expenseData);

        setEnterTitle('');
        setEnterPrice('');
        setEnterDate('');
    }

    return(
        <form onSubmit={submitHandle}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type='text'value={enterTitle}  onChange={NewFormtitlehand}/>
                </div>
                <div className='new-expense_control'>
                    <label>Price</label>
                    <input type='number' value={enterPrice} min='0.01' step="0.01" onChange={NewFormPricehand}/>
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type='date' value={enterDate} onChange={NewFormDatehand} />
                </div>
            </div>
            <div className='new-expense_action'>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    )

}

export default ExpensesForm