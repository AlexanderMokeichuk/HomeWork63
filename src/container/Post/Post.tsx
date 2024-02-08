import React, {useCallback, useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {ApiPost, ApiPosts} from "../../type";
import axiosApi from "../../axiosApi";
import {format} from "date-fns";
import Spinner from "../../components /Spinner/Spinner";

const Post: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState<ApiPost | null>();
  const [loading, setLoading] = useState(false);

  const fetchPost = useCallback(async () => {
    setLoading(true);
    const {data: response} = await axiosApi.get<ApiPost | null>("/posts/" + params.id + ".json");

    setPost(response);
    setLoading(false);
  }, [params.id]);

  useEffect(() => {
    void fetchPost();
  }, [fetchPost]);

  const deletePost = async () => {
    setLoading(true);
    await axiosApi.delete("/posts/" + params.id + ".json");
    setLoading(false);
    navigate("/");
  };

  let postAlert = <Spinner/>;

  if(!loading && post) {
    postAlert = (
      <div className={"card bg-info col-6 p-3"}>
        <div className={"card-header"}>
          <p>{format(post.createdAt, "dd.MM.yyyy HH:mm")}</p>
          <h5>{post.title}</h5>
        </div>
        <div className={"text-break"}>
          {post.description}
        </div>
        <div className={"d-flex justify-content-end gap-2 mt-2"}>
          <button type={"button"} onClick={deletePost} className={"btn btn-danger"}>Delete</button>
          <Link className={"btn btn-primary"} to={"/posts/" + params.id + "/edit"}>Edit</Link>
        </div>
      </div>
    );
  } else if (!post && !loading) {
    postAlert = (
      <h1 className={"text-center"}>Not found</h1>
    );
  }


  return (
    <div className={"d-flex justify-content-center"}>
      {postAlert}
    </div>
  );
};

export default Post;