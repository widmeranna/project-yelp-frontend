import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Rating} from 'material-ui-rating';
import TextField from 'material-ui/TextField';
import {grey50} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import {addReview} from '../../store/actions';

class NewReview extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
			text: ''
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.props.addReview({
			value: this.state.value,
			text: this.state.text
		});

		this.state = ({
			value: 0,
			text: '',
		});
	};

	render() {
		console.log('state:', this.state);
		console.log('props:', this.props);

		return (
			<div>
				<h1>New Review</h1>
				<form onSubmit={this.handleSubmit}>
					<Rating
						value={this.state.value}
						max={5}
						readOnly={false}
						onChange={(value) => this.setState({value})}
					/>
					<TextField
						hintText="Comment"
						floatingLabelText="Your Comment..."
						multiLine={true}
						fullWidth={true}
						rows={8}
						value={this.state.text}
						onChange={(e, text) => this.setState({text})}
					/>
					<br/>
					<RaisedButton
						label="Create a Review"
						backgroundColor="red"
						labelColor={grey50}
						type="submit"
					/>
					<br/>
				</form>

				<FlatButton
					label="back"
					onClick={this.props.back}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addReview: (review) => dispatch(addReview(review)),
});

export default connect(null, mapDispatchToProps)(NewReview);
