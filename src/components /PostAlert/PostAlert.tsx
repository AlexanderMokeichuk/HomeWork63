import React from "react";
import {Post} from "../../type";
import {format} from "date-fns";
import {Link} from "react-router-dom";

interface Props {
  post: Post,
}
const PostAlert: React.FC<Props> = ({post}) => {
  return (
    <div className={"alert d-flex flex-column alert-secondary w-100"}>
      <p className={"text-secondary"} style={{fontSize: 12}}>Created on: {format(post.createdAt, 'dd.MM.yyyy HH:mm')}</p>
      <h6 className={"text-break"}>{post.title}</h6>
      <Link  className={"btn btn-secondary ms-auto"} to={'/posts/' + post.id}>Read more</Link>
    </div>
  );
};

export default PostAlert;