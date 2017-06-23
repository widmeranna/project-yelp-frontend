import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewReviewComponent from '../../containers/NewReview';


class NewReview extends Component {
	render(){
		return(
			<NewReviewComponent back={this.props.back} />
		);
	}
}

const mapStateToProps = (state, props) => ({
	back: props.history.goBack,
});

export default connect(mapStateToProps)(NewReview);
