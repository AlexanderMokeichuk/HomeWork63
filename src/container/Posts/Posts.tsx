import React, {useCallback, useEffect, useState} from "react";
import {ApiPosts, Post} from "../../type";
import axiosApi from "../../axiosApi";
import PostAlert from "../../components /PostAlert/PostAlert";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPost = useCallback(async () => {
    const {data: response} = await axiosApi.get<ApiPosts | null>("/posts.json");
    if (response){
      setPosts(Object.keys(response).map(id => ({
        ...response[id],
        id,
      })).reverse());
    } else {
      setPosts([]);
    }
  }, []);

  useEffect(() => {
    void fetchPost();
  }, [fetchPost]);

  return (
    <div>
      {posts.map((post => {
        return <PostAlert key={post.id} post={post}/>;
      }))}
    </div>
  );
};

export default Posts;