// function Example 

import React  from 'react';
import { useState } from 'react';
import './app.css'
import NewExpenses from './components/NewExpenses/NewExpenses';
import SubExapens from './components/Expenes/SubExpens';

let Demo=[{

  id: 's1',
  title :'Mobile',
  price :1000,
  date: new Date(2022 ,1, 12)
},
{

  id: 's2',
  title :'Laptop',
  price :50000,
  date: new Date(2022,2,23)
},
{

  id: 's3',
  title :'Cooler',
  price :20000,
  date: new Date(2022, 3, 29)
}
];


const App=()=>{

  const[expenses ,setExpenses]= useState(Demo)
const addExpense =(data)=>{
  const updetedExpense =[data,...expenses]
  setExpenses(updetedExpense)
}

    return (
      <div className='appCss'>
    <NewExpenses  onAddExapense ={addExpense}/>
  <SubExapens item= {expenses} />
  </div>
    )
}
export default App;