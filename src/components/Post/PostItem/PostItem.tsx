import React from "react";
import { PostsType } from "@src/types/postType";

import { PostContainer } from "@src/components/Post/PostItem/PostItem.styled";
import dayjs from "dayjs";
import { Badge } from "@src/components/ui/badge";

interface PostItemProps {
  post: PostsType;
}

function PostItem({ post }: PostItemProps) {
  return (
    <PostContainer href={"/"}>
      <div className="flex flex-col justify-between">
        <span className="text-3xl font-medium">{post.title}</span>
        <span className="text-zinc-700 text-base ">{post.content}</span>
        <div className="flex gap-5">
          <span className="text-zinc-400">
            {dayjs(post.created_at).format("YYYY년 MM월 DD일")}
          </span>
          <Badge variant={"red"}>React</Badge>
        </div>
      </div>
    </PostContainer>
  );
}

export default PostItem;
