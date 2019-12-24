import { connect } from 'react-redux';
import { setRegisterUser } from '../../store/actions';
import Register from './Register';

const mapStateToProps = state => ({
    users: state.auth.users
});

const mapDispatchToProps = dispatch => ({
    setRegisterUser: (users) => dispatch(setRegisterUser(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);