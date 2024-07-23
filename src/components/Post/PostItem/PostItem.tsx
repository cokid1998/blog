import React from "react";
import { PostsType } from "@src/types/postType";
import dayjs from "dayjs";
import { Badge } from "@src/components/ui/badge";
import {
  MotionLink,
  MotionSpan,
  PostTitleVariants,
  PostContainerVariants,
  PostTitleArrowVariants,
} from "@src/components/Post/PostItem/PostItem.motion";
import { ChevronRight } from "lucide-react";

interface PostItemProps {
  post: PostsType;
}

const switchBadgeVariants = (category: string) => {
  switch (category) {
    case "NEXT.JS":
      return "NEXT";
    case "FRONT-END":
      return "FRONTEND";
    case "REACT":
      return "REACT";
    default:
      "default";
  }
};

function PostItem({ post }: PostItemProps) {
  return (
    <MotionLink
      href={`/${post.category}/${post.id}`}
      className="flex gap-10 rounded-xl p-4"
      initial="init"
      whileHover="hover"
      variants={PostContainerVariants}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex flex-col justify-between gap-1">
        <div className="flex items-center relative">
          <MotionSpan variants={PostTitleArrowVariants} className="absolute">
            <ChevronRight color="#22C564" />
          </MotionSpan>
          <MotionSpan
            variants={PostTitleVariants}
            className="text-3xl font-medium"
          >
            {post.title}
          </MotionSpan>
        </div>
        <span className="text-zinc-700 text-base opacity-80">
          {post.content}
        </span>
        <div className="flex gap-5">
          <span className="text-zinc-400 opacity-80">
            {dayjs(post.created_at).format("YYYY년 MM월 DD일")}
          </span>

          <Badge variant={switchBadgeVariants(post.category)}>
            {post.category}
          </Badge>
        </div>
      </div>
    </MotionLink>
  );
}

export default PostItem;
