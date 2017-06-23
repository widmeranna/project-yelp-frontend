import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Rating } from 'material-ui-rating';
import TextField from 'material-ui/TextField';


class NewReview extends Component {
	constructor(props){
		super(props);

		this.state = {
			value: 0,
		}
	}

	render(){
		return(
			<div>
				<h1>New Review</h1>
				<Rating
					value={this.state.value}
					max={5}
					readOnly={false}
					onChange={(value) => this.setState({value})}
				/>
				<TextField
		      hintText="MultiLine with rows: 2 and rowsMax: 4"
		      multiLine={true}
					fullWidth={true}
		      rows={8}
		      // rowsMax={4}
		    />
				<br />
				<RaisedButton
					label="Create a Review"
					backgroundColor="red"
					labelColor="white"
				/>
				<br />
				<FlatButton label="back" onClick={this.props.back}/>
			</div>
		);
	}
}

export default NewReview;
