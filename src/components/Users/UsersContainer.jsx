import React from 'react';
import {connect} from 'react-redux';
import *  as axios from 'axios';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';
import Users from './Users';
import preloader from './../../assets/images/preloader.svg';
import Preloader from '../common/preloader/Preloader';
import {usersAPI} from '../../api/api';

class UsersAPIComponent extends React.Component {

    constructor(props) {
        super(props);
       
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
            });

        
    }

    onPageClick = (p) => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(p, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
            });
    }

    render() {
        

    return <> 
    {this.props.isFetching ? <Preloader /> : null}
    <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageClick={this.onPageClick}
        users={this.props.users}
    />
    </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {dispatch(followAC(userId))},
//         unfollow: (userId) => {dispatch(unfollowAC(userId))},
//         setUsers: (users) => {dispatch(setUsersAC(users))},
//         setCurrentPage: (currentPage) => {dispatch(setCurrentPageAC(currentPage))},
//         setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
//         toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))}
//     }
// }

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
}) (UsersAPIComponent);