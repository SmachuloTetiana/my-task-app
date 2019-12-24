import { connect } from 'react-redux';
import { setCurrentUser } from '../../store/actions';
import Login from './Login';

const mapStateToProps = state => ({
    users: state.auth.users,
    currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);