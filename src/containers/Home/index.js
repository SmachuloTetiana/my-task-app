import { connect } from "react-redux";
import { addTask, deleteTask, editTask, saveEditTask } from "../../store/actions";
import Home from "./Home";

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  items: state.auth.tasks
});

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task)),
  deleteTask: id => dispatch(deleteTask(id)),
  editTask: id => dispatch(editTask(id)),
  saveEditTask: (id, newTask) => dispatch(saveEditTask(id, newTask))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);