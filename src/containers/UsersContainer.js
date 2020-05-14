import React, { useEffect } from "react";
import { Users as UsersPage } from "../pages/Users";
import { connect } from "react-redux";
import { fetchUsers } from "../store/users/actions.js";
import { getUsers, getUsersLoading } from "../store/users/reducers";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Loader } from "../components/Loader";

const UsersContainer = ({ users, isLoading, fetchUsers }) => {
  return (
    <UsersPage users={users} isLoading={isLoading} fetchUsers={fetchUsers} />
  );
};

const mapStateToProps = ({ usersReducer: usersState }) => ({
  users: getUsers(usersState),
  isLoading: getUsersLoading(usersState)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: bindActionCreators(fetchUsers, dispatch)
});

UsersContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  fetchUsers: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
