import React from "react";
import { connect } from "react-redux";

function Counter({ increment, decrement, count }) {
  return (
    <div>
      <button onClick={increment}>+</button>
      <span data-testid="count">{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}

const mapState = state => ({
  count: state.count
})

const dispatchToProps = dispatch => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" })
})

export default connect(mapState, dispatchToProps)(Counter);
