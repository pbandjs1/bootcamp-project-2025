import React from "react";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date): string {
  const date = new Date(time);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="comment">
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}
