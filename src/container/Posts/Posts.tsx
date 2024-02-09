import React, {useCallback, useEffect, useState} from "react";
import {ApiPosts, Post} from "../../type";
import axiosApi from "../../axiosApi";
import PostAlert from "../../components /PostAlert/PostAlert";
import Spinner from "../../components /Spinner/Spinner";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPost = useCallback(async () => {
    setLoading(true);
    const {data: response} = await axiosApi.get<ApiPosts | null>("/posts.json");
    if (response){
      setPosts(Object.keys(response).map(id => ({
        ...response[id],
        id,
      })).reverse());
    } else {
      setPosts([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    void fetchPost();
  }, [fetchPost]);

  let alertsPost = (
    <>
      {posts.map((post => {
        return <PostAlert key={post.id} post={post}/>;
      }))}
    </>
  );

  if(loading) alertsPost = <Spinner/>;

  return (
    <div className={"d-flex flex-column align-items-center"}>
      {alertsPost}
    </div>
  );
};

export default Posts;