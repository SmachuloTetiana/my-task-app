import { connect } from "react-redux";
import { addTask, deleteTask } from "../../store/actions";
import Home from "./Home";

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  items: state.auth.tasks
});

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task)),
  deleteTask: id => dispatch(deleteTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);