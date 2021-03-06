import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC, setUsersTotalCountAC, setCurrentPageAC } from "./../../redux/users-reducer";
import React from "react";
import * as axios from "axios";


class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChange = (pageN) => {
    this.props.setCurrentPage(pageN);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageN}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
       
      });
  };

  render() {
    return <Users 
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      onPageChange={this.onPageChange}
      currentPage={this.props.currentPage}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setUsersTotalCount: (num) => {
      dispatch(setUsersTotalCountAC(num));
    },
    setCurrentPage: (num) => {
      dispatch(setCurrentPageAC(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
