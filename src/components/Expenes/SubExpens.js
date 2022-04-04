import './SubExpens.css';
import React  from 'react';
import SubComponent from './subComponent';
import Card from '../UI/card';
const SubExapens =(props)=>{

    return(
    <Card className='expenses'>
            
{
    props.item.map(
        expense=>(
            <SubComponent 
            date = {expense.date}
            title ={expense.title}
            price = {expense.price}

            ></SubComponent>
        )
    )
}

           
             {/* <SubComponent 
            date = {props.item[1].date}
            title ={props.item[1].title}
            price = {props.item[1].price}

            ></SubComponent>
             <SubComponent 
            date = {props.item[2].date}
            title ={props.item[2].title}
            price = {props.item[2].price}

            ></SubComponent> */}
        </Card>)
}

export default SubExapens;