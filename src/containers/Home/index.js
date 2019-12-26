import { connect } from "react-redux";
import { addTask, deletedTask, saveEditTask, editTask } from "../../store/actions";
import Home from "./Home";

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task)),
  deletedTask: id => dispatch(deletedTask(id)),
  editTask: id => dispatch(editTask(id)),
  saveEditTask: (id, task) => dispatch(saveEditTask(id, task))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);