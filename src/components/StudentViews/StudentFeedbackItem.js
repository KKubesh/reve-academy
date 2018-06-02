import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import outline_star from '../../styles/images/outline_star.png';
import star from '../../styles/images/star.png';

const styles = (theme) => ({
	paper: {
		position: 'relative',
		width: 20,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4
	}
});

const itemStyle = {
	feedbackField: {
		padding: '10px',
		margin: '10px',
		border: '1px solid #D8441C',
		borderRadius: '25px',
		width: 400
	},
	btn: {
		borderRadius: '15px',
		border: '1px solid #D8441C'
	}
};
const mapStateToProps = (state) => ({
    state,
});

class StudentFeedbackItem extends Component {
    
    state = {
        open: false,
        commentItem: { 
            person_id: this.props.person_id,
            comment_id: this.props.comments.id
        }
    };

   
//LOGIC FOR LIKING COMMENT

    likeCommentMethod = () => {
		console.log('Clicked');
		this.props.dispatch({
            type: 'ADD_STUDENT_COMMENT_LIKE',
            payload: this.state.commentItem

        });

    };
//END LIKE LOGIC

//LOGIC FOR UNLIKING COMMENT
    unlikeCommentMethod = () => {
        this.props.dispatch({
            type: 'REMOVE_COMMENT_LIKE',
            payload: this.state.commentItem.comment_id,
            
        })
    }
//END UNLIKE LOGIC

	render() {
        
        let commentItem =this.props.comment_id;
        let commentsLikedId = this.props.commentsLiked.comment_id;
        let itemId = this.props.comments.id;
        let likeButton = null;

        
        if (this.props.commentsLiked.find(function(val) {

            return(val.comment_id === itemId);
        })
    ){
        likeButton = 
        <img src={outline_star} onClick={this.unlikeCommentMethod} />
     
        }else{
            likeButton =
            <img src={star} onClick={this.likeCommentMethod} />
        }

        
     

		return (
			<Grid style={itemStyle.commentCenter} item xs={12}>
			<Grid  item xs={6} lg={6} >

			<div>
                {likeButton}

				<Card style={itemStyle.feedbackField}>
					<CardContent>
						<div>
							{' '}
							Student: {this.props.comments.comment}
							<br />
						</div>
					</CardContent>
				</Card>
			</div>
			</Grid>
            </Grid>            

		);
	}
}

export default connect(mapStateToProps)(StudentFeedbackItem);
