import React from "react";
import {Post} from "../../type";
import {format} from "date-fns";
import {Link} from "react-router-dom";

interface Props {
  post: Post,
}
const PostAlert: React.FC<Props> = ({post}) => {
  return (
    <div className={"alert alert-primary w-100"}>
      <p>{format(post.createdAt, 'dd.MM.yyyy HH:mm')}</p>
      <h6 className={"text-break"}>{post.title}</h6>
      <Link  className={"btn btn-primary"} to={'/posts/' + post.id}>Read more</Link>
    </div>
  );
};

export default PostAlert;