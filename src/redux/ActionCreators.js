import * as ActionTypes from './ActionTypes';
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { baseUrl } from '../shared/baseUrl';



// DISHES
export const fetchDishes = () => (dispatch) => {
      dispatch(dishesLoading(true));

      return fetch(baseUrl + 'dishes')
            .then(response => {
                  if (response.ok) {
                        return response;
                  } else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                  }
            },
                  error => {
                        var errmess = new Error(error.message);
                        throw errmess;
            })
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)))

};

export const dishesLoading = () => ({
      type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
      type: ActionTypes.DISHES_FAILED,
      payload: errmess
});

export const addDishes = (dishes) => ({
      type: ActionTypes.ADD_DISHES,
      payload: dishes
});

// PROMOTIONS
export const fetchPromotions = () => (dispatch) => {
      dispatch(promotionsLoading(true));

      return fetch(baseUrl + 'promotions')
            .then(response => {
                  if (response.ok) {
                        return response;
                  } else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                  }
            },
                  error => {
                        var errmess = new Error(error.message);
                        throw errmess;
            })
            .then(response => response.json())
            .then(promotions => dispatch(addPromotions(promotions)))
            .catch(error => dispatch(promotionsFailed(error.message)))
      
};

export const promotionsLoading = () => ({
      type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = (errmess) => ({
      type: ActionTypes.PROMOTIONS_FAILED,
      payload: errmess
});

export const addPromotions = (promotions) => ({
      type: ActionTypes.ADD_PROMOTIONS,
      payload: promotions
});

// LEADERS
export const fetchLeaders = () => (dispatch) => {
      dispatch(LeadersLoading(true));
      
      return fetch(baseUrl + 'leaders')
      .then(response => {
            if (response.ok) {
                  return response;
            } else {
                  var error = new Error('Error ' + response.status + ': ' + response.statusText);
                  error.response = response;
                  throw error;
            }
      },
            error => {
                  var errmess = new Error(error.message);
                  throw errmess;
      })
      .then(response => response.json())
      .then(leaders => dispatch(addLeaders(leaders)))
      .catch(error => dispatch(LeadersFailed(error.message)))
      
};

export const LeadersLoading = () => ({
      type: ActionTypes.LEADERS_LOADING
});

export const LeadersFailed = (errmess) => ({
      type: ActionTypes.LEADERS_FAILED,
      payload: errmess
});

export const addLeaders = (leader) => ({
      type: ActionTypes.ADD_LEADERS,
      payload: leader
});

// COMMENTS
export const fetchComments = () => (dispatch) => {
      return fetch(baseUrl + 'comments')
            .then(response => {
                  if (response.ok) {
                        return response;
                  } else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                  }
            },
                  error => {
                        var errmess = new Error(error.message);
                        throw errmess;
            })
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)))
            .catch(error => dispatch(CommentsFailed(error.message)))
            
};

export const CommentsFailed = (errmess) => ({
      type: ActionTypes.COMMENTS_FAILED,
      payload: errmess
});

export const addComments = (comment) => ({
      type: ActionTypes.ADD_COMMENT,
      payload: comment
});

export const postComment = (dishId, rating, author, comment) =>(dispatch) => {

      const newCommnent = {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
      };

      newCommnent.date = new Date().toISOString();

      return fetch(baseUrl + 'comments', {
            method: "POST",
            body: JSON.stringify(newCommnent),
            headers: {
                  'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
      })
      .then(response => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
            }
          },
          error => {
                throw error;
          })
        .then(response => response.json())
        .then(response => dispatch(addComments(response)))
        .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};
      

