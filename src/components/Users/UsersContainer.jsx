import React from 'react';
import {connect} from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';


class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
       
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        // this.props.toggleIsFetching(true);

        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(response.items);
        //         this.props.setTotalUsersCount(response.totalCount);
        //     });

        
    }

    onPageClick = (p) => {
       
        this.props.getUsers(p, this.props.pageSize);
       
        this.props.setCurrentPage(p);
        // this.props.toggleIsFetching(true);

        // usersAPI.getUsers(p, this.props.pageSize)
        //     .then(response => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(response.items);
        //     });
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
        followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress
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
    follow, unfollow, setCurrentPage, 
    toggleFollowingProgress, getUsers
}) (UsersContainer);