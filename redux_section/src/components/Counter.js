// import { Component } from 'react';
import { useSelector, useDispatch} from 'react-redux';
// import { connect } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state=> state.counter.counter);
  const showCounter = useSelector(state=> state.counter.showCounter);

  const incrementHandler = ()=>
  {
    dispatch(counterActions.increment());
  }

  const decrementHandler = ()=>
  {
    dispatch(counterActions.decrement());
  }

  const increasetHandler =()=>
  {
    dispatch(counterActions.increase(5));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increasetHandler}>Increase By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component
// {

//   decrementHandler()
//   {
//     this.props.decrement();
//   }

//   incrementHandler()
//   {
//     this.props.increment();
//   }

//   toggleCounterHandler()
//   {

//   }

//   render()
//   {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const StateToProps = (state)=>
// {
//   return {
//     counter: state.counter,
//   }
// }

// const DispatchToProps = (dispatch)=>
// {
//   return{
//     increment: ()=> dispatch({type: 'increment'}),
//     decrement: ()=> dispatch({type: 'decrement'}),
//   }
// }

// export default connect(StateToProps, DispatchToProps)(Counter);

