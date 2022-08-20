import { connect } from "react-redux";
import Users from "./Users";
import {
  toggleIsFetching,
  follow,
  setUsers,
  unfollow,
  setUsersTotalCount,
  setCurrentPage,
  toggleIsFollowing,
} from "./../../redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
      });
  }

  onPageChange = (pageN) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageN);
    usersAPI.getUsers(pageN, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users {...this.props} onPageChange={this.onPageChange} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followProgress: state.usersPage.followProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setUsersTotalCount,
  setCurrentPage,
  toggleIsFetching,
  toggleIsFollowing,
})(UsersAPIComponent);

/* totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChange={this.onPageChange}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleIsFollowing={this.props.toggleIsFollowing}
          followProgress={this.props.followProgress} */
