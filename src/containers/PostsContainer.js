import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Posts as PostsPage } from "../pages/Posts";
import { connect } from "react-redux";
import {
  addPost,
  addPostToFavorites,
  fetchPosts,
  removePostFromFavorites,
  searchPosts
} from "../store/posts/actions";
import {
  getFavoriteFilter,
  getFavoritePosts,
  getPosts,
  getPostsError,
  getPostsLoading,
  getSearchWord
} from "../store/posts/reducers";
import { bindActionCreators } from "redux";

const PostsContainer = ({
  posts,
  isLoading,
  error,
  fetchPosts,
  addPost,
  addPostToFavorites,
  removePostFromFavorites,
  favoritePosts,
  isShowFavorites,
  searchPosts,
  searchWord
}) => {
  useEffect(() => {
    if (!posts.length) {
      fetchPosts();
    }
  }, [posts.length, fetchPosts]);
  return (
    <PostsPage
      posts={posts}
      isLoading={isLoading}
      error={error}
      addPost={addPost}
      addPostToFavorites={addPostToFavorites}
      removePostFromFavorites={removePostFromFavorites}
      favoritePosts={favoritePosts}
      isShowFavorites={isShowFavorites}
      searchPosts={searchPosts}
      searchWord={searchWord}
    />
  );
};

PostsContainer.propTypes = {
  isLoading: PropTypes.bool,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string
    }).isRequired
  ),
  error: PropTypes.object,
  addPost: PropTypes.func.isRequired,
  addPostToFavorites: PropTypes.func.isRequired,
  favoritePosts: PropTypes.array,
  removePostFromFavorites: PropTypes.func,
  isShowFavorites: PropTypes.bool,
  searchPosts: PropTypes.func,
  searchWord: PropTypes.string
};

const mapStateToProps = ({ postsReducer: postsState }) => ({
  posts: getPosts(postsState),
  isLoading: getPostsLoading(postsState),
  error: getPostsError(postsState),
  favoritePosts: getFavoritePosts(postsState),
  isShowFavorites: getFavoriteFilter(postsState),
  searchWord: getSearchWord(postsState)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: bindActionCreators(fetchPosts, dispatch),
  addPost: bindActionCreators(addPost, dispatch),
  addPostToFavorites: id => dispatch(addPostToFavorites(id)),
  removePostFromFavorites: id => dispatch(removePostFromFavorites(id)),
  searchPosts: word => dispatch(searchPosts(word))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
