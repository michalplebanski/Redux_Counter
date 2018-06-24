import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions/actions";

class App extends Component {
	render() {
		return (
			<div>
				<div>Licznik: {this.props.sum}</div>
				<button onClick={this.props.incrementCount}>
					+ {this.props.value}
				</button>
				<button onClick={this.props.decrementCount}>
					-{this.props.value}
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		sum: state.sum,
		value: state.value
	};
};

const mapDispatchToprops = dispatch => {
	return {
		incrementCount: () => dispatch(actions.incrementCount()),
		decrementCount: () => dispatch(actions.decrementCount())
	};
};

export default connect(mapStateToProps, mapDispatchToprops)(App);
