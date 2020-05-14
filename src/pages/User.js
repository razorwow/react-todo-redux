import React, { useEffect } from "react";
import { Loader } from "../components/Loader";

export const User = ({
  id,
  user,
  userPosts,
  fetchUser,
  fetchUserPosts,
  isLoading
}) => {
  useEffect(() => {
    fetchUser(id);
    fetchUserPosts(id);
  }, []);
  return (
    <div className="container mt-4">
      <Loader isLoading={isLoading} />
      {user && !isLoading && (
        <ul className="list-group">
          <li className="list-group-item">
            <h2>Info</h2>
          </li>
          <li className="list-group-item">ID: {user.id}</li>
          <li className="list-group-item">Name: {user.name}</li>
          <li className="list-group-item">Email: {user.email}</li>
          <li className="list-group-item">Phone: {user.phone}</li>
          <li className="list-group-item">Website: {user.website}</li>
          <li className="list-group-item">
            <h2>Address</h2>
          </li>
          <li className="list-group-item">Street: {user.address.street}</li>
          <li className="list-group-item">Suite: {user.address.suite}</li>
          <li className="list-group-item">Suite: {user.address.suite}</li>
          <li className="list-group-item">Zipcode: {user.address.zipcode}</li>
          <li className="list-group-item">
            <h2>Company</h2>
          </li>
          <li className="list-group-item">Name: {user.company.name}</li>
          <li className="list-group-item">
            Catch phrase: {user.company.catchPhrase}
          </li>
          <li className="list-group-item">Bs: {user.company.bs}</li>
        </ul>
      )}
      {userPosts && !isLoading && (
        <div className="list-group">
          <h2 className="m-4">User posts</h2>
          {userPosts.map(post => {
            return (
              <div key={post.id} className="list-group-item">
                <div className="h2 d-flex justify-content-between">
                  <span>{post.title}</span>{" "}
                </div>
                <p>{post.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
