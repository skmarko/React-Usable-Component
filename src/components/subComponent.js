

import './subCom.css';

import SubDate from './subDate';

function SubComponent(props){
   


    return (
        <div className='item'>
            <SubDate  date= {props.date} />
            <div className='item_desc'>
            <h2>{props.title}</h2>
            <div className='item_price'>₹ {props.price}</div> 
            </div>

        </div>
    )}

export default SubComponent;