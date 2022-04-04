
import {React}  from 'react';
import Card from '../UI/card';
import './subCom.css';


import SubDate from './subDate';
// import { useState } from 'react';

const SubComponent=(props)=>{

    
    // const [newtitle , subNewtitle] = useState('Enter Product')
    // const [title , subTitle] = useState(props.title)
    // // const clickHandle = ()=>{
    // //     // alert("click");

    //     subTitle("New Product..")
    // }
   
    // const newChange =(event)=>{
    //     subNewtitle(event.target.value)
    // }

    return (
        <Card className='item'>
            <SubDate  date= {props.date} />
            <div className='item_desc'>
            <h2>{props.title}</h2>
            <div className='item_price'>₹ {props.price}</div> 
            {/* <input  type='text' value= {newtitle} onChange={newChange}/>
            <button onClick={clickHandle} >click </button> */}
            </div>

        </Card>
    )}

export default SubComponent;