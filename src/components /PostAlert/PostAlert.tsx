import React from "react";
import {Post} from "../../type";
import {format} from "date-fns";
import {Link} from "react-router-dom";

interface Props {
  post: Post,
}
const PostAlert: React.FC<Props> = ({post}) => {
  return (
    <div className={"alert alert-primary"}>
      <p>{format(post.createdAt, 'dd.MM.yyyy HH:mm')}</p>
      <h6>{post.description}</h6>
      <Link to={"/posts/" + post.id} className={"btn btn-primary"}>Read more</Link>
    </div>
  );
};

export default PostAlert;