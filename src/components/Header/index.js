import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: () => dispatch(setCurrentUser())
})

export default connect()(Header);