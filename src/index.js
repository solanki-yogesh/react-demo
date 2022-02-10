import { createStore } from 'redux';


// if else method

// const reducer = (state = 0, action) => {
//   console.log('reducer called');

//   if(action.type==='INCREMENT'){
//     return state+1;
//   }
//   else if(action.type==='DECREMENT'){
//     return state -1;
//   }
//   return state;
// };


// switch case method

// const Reducer =(state=0,action)=>{
//   switch(action.type){
//     case 'INCREMENT':
//       return state+1;

//     case 'DECREMENT':
//       return state-1;

//     default:
//       return state;
//   }
// }


// in addition to add we can pass extra information as part of the action

const reducer=(state=0,action)=>{
  switch(action.type){
    case 'INCREMENT':
      return state+action.payload;

    case 'DECREMENT' :
      return state-action.payload;

    default:
      return state;
  }
}


// method without payload

// const store = createStore(reducer);

// store.subscribe(() => {
//   console.log('current state', store.getState());
// });

// store.dispatch({
//   type:'INCREMENT',
// })

// store.dispatch({
//   type:'INCREMENT',
// })


// store.dispatch({
//   type:'DECREMENT',
// })


//method with payload

const store = createStore(reducer);

store.subscribe(()=>{
  console.log('current state', store.getState());
});

store.dispatch({
  type:'INCREMENT',
  payload: 1
})

store.dispatch({
  type:'INCREMENT',
  payload:5
})

store.dispatch({
  type:'DECREMENT',
  payload:2
})