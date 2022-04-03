import './SubExpens.css';
import SubComponent from './subComponent';
function SubExapens (props){

    return(
    <div className='expenses'>
            
            <SubComponent 
            date = {props.item[0].date}
            title ={props.item[0].title}
            price = {props.item[0].price}

            ></SubComponent>
             <SubComponent 
            date = {props.item[1].date}
            title ={props.item[1].title}
            price = {props.item[1].price}

            ></SubComponent>
             <SubComponent 
            date = {props.item[2].date}
            title ={props.item[2].title}
            price = {props.item[2].price}

            ></SubComponent>
        </div>)
}

export default SubExapens;