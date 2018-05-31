import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* studentFeedbackSaga(){
    // yield takeEvery('ADD_COMMENT', addCommentSaga);
    yield takeEvery('GET_STUDENT_COMMENT', getStudentCommentSaga);
}





function* getStudentCommentSaga(){

    try{
        const studentCommentResponse = yield call(axios.get, `/api/studentFeedback`);
        yield put({
            type:'SET_STUDENT_COMMENT_REDUCER',
            payload: studentCommentResponse.data,
        })
    } catch(error){
        console.log('error in getting comment: ', error);
    }
}


function* postCommentSaga(action){
    try{
        console.log('post comment payload: ', action.payload);
        yield call(axios.post, '/api/studentFeedback', action.payload);
        yield put({
            type:'GET_COMMENTS',
        })
    } catch(error){
        console.log('error on post addComment: ', error);
    }
}

export default studentFeedbackSaga;