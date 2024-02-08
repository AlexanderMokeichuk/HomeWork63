import React from "react";
import {Post} from "../../type";
import {format} from "date-fns";

interface Props {
  post: Post,
}
const PostAlert: React.FC<Props> = ({post}) => {
  return (
    <div className={"alert alert-primary"}>
      <p>{format(post.createdAt, 'dd.MM.yyyy HH:mm')}</p>
      <h6>{post.description}</h6>
    </div>
  );
};

export default PostAlert;