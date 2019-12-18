import callApi from './../Utils/apiCaller';
import * as Types from '../Constants/ActionTypes'
import api from "../service/api";

export const fetchPostsDataRequest = () => {
  return (dispatch) => {
    return api.get('post').then(res => {
      dispatch(fetchPostsData(res.data.posts))
    }).catch(error => {
      console.log(error);
      alert('lỗi kết nối');
    });
  };
}
export const fetchPostsData = (posts) => {
  return {
    type: Types.FETCH_POSTS_DATA,
    posts
  }
}