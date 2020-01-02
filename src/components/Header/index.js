import { connect } from 'react-redux';
import { logOutUser } from '../../store/actions';
import Header from './Header';

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
    logOutUser: () => dispatch(logOutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);