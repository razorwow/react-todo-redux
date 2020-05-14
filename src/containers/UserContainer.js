import React from "react";
import { useParams } from "react-router-dom";
import { User as UserPage } from "../pages/User";
import { getUser, getUserLoading, getUserPosts } from "../store/user/reducers";
import { fetchUser, fetchUserPosts } from "../store/user/actions";
import { connect } from "react-redux";

const UserContainer = ({
  user,
  userPosts,
  fetchUser,
  fetchUserPosts,
  isLoading
}) => {
  let { id } = useParams();
  return (
    <UserPage
      id={id}
      fetchUser={fetchUser}
      fetchUserPosts={fetchUserPosts}
      user={user}
      userPosts={userPosts}
      isLoading={isLoading}
    />
  );
};

const mapStateToProps = ({ userReducer: userState }) => ({
  user: getUser(userState),
  userPosts: getUserPosts(userState),
  isLoading: getUserLoading(userState)
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchUserPosts: id => dispatch(fetchUserPosts(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
