import { connect } from "react-redux";
import { addTask } from "../../store/actions";
import Home from "./Home";

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);