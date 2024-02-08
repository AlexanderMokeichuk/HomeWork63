import React, {useCallback, useEffect, useState} from "react";
import {ApiPost} from "../../type";
import axiosApi from "../../axiosApi";
import Spinner from "../../components /Spinner/Spinner";
import {useNavigate, useParams} from "react-router-dom";

const defaultState: ApiPost = {
  createdAt: "",
  title: "",
  description: "",
};

const NewPost: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [postBody, setPostBody] = useState<ApiPost>(defaultState);

  const fetchPost = useCallback(async () => {
    setLoading(true);
    const {data: response} = await axiosApi.get<ApiPost | null>("/posts/" + params.id + ".json");

    if(response) setPostBody(response);
    setLoading(false);
  }, [params.id]);

  useEffect(() => {
   if (params.id) {
     void fetchPost();
   }
  }, [fetchPost, params.id]);

  const changeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPostBody(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const date = new Date();
    const newDate = date.toISOString();

    const post: ApiPost = {
      title: postBody.title,
      description: postBody.description,
      createdAt: newDate,
    };

    try {
     if(params.id) {
       await axiosApi.patch("/posts/" + params.id + ".json", {title:postBody.title, description: postBody.description});
       navigate(-1);
     } else {
       await axiosApi.post("/posts.json", post);
     }
      setPostBody(defaultState);
    } finally {
      setLoading(false);
    }

  };

  let form = (
    <form onSubmit={onFormSubmit} className={"form-control d-flex flex-column"}>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          name={"title"}
          className="form-control"
          placeholder="Title"
          required

          value={postBody.title}
          onChange={changeForm}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          name={"description"}
          className="form-control"
          required

          value={postBody.description}
          onChange={changeForm}
        ></textarea>
      </div>
      <button type={"submit"} className={"btn btn-primary px-4 ms-auto"}>add</button>
    </form>
  );

  if(loading) form = <Spinner/>;

  return (
    <div className={"w-50 m-auto d-flex justify-content-center"}>
      {form}
    </div>
  );
};

export default NewPost;