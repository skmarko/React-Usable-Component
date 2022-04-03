// function Example 


import './app.css'

import SubExapens from './components/SubExpens';
function App(){

  let info=[{

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
    return (
      <div className='appCss'>
      <h2>
      Product Details
  </h2>
  <SubExapens item= {info} />
  </div>
    )
}
export default App;