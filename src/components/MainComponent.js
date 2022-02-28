import React,{Component}        from 'react';
import {Switch,Route,Redirect,withRouter}  from 'react-router-dom';
import { connect } from 'react-redux';
import Home         from './HomeComponent';
import Menu         from './MenuComponent';
import Dishdetail   from  './DishdetailComponent';
import Contact      from './ContactComponent';
import About        from './AboutComponent';
import Header       from './HeaderComponent';
import Footer       from './FooterComponent';
import {postComment, fetchDishes, fetchPromotions, fetchLeaders,fetchComments} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchPromotions: () => { dispatch(fetchPromotions()) },
  fetchLeaders: () => {dispatch(fetchLeaders())},
  fetchComments: () => {dispatch(fetchComments())}
  
});

class Main extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchPromotions();
    this.props.fetchLeaders();
    this.props.fetchComments();
  }

  render() {

    const HomePage = () =>{
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promotionsLoading={this.props.promotions.isLoading}
          promotionsErrMess={this.props.promotions.errMess}
          
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess}
        />
      )
    }

    const DishWithId = ({match}) => {
      return(
          <Dishdetail
            dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            dishesLoading={this.props.dishes.isLoading}
            dishesErrMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
            commentsErrMess={this.props.comments.errMess}
            postComment = {this.props.postComment}
          />
      );
    };

    return (
      <div >
        <Header/>        
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/>} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route exact path="/aboutus" component={()=> <About leaders={this.props.leaders}/>} />
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
