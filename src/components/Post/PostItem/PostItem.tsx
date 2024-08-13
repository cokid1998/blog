import React from "react";
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
import { PostPreviewType } from "@src/types/postPreviewType";

interface PostItemProps {
  post: PostPreviewType;
}

function PostItem({ post }: PostItemProps) {
  const { title, date, desc, tags, slug } = post;
  console.log(tags);

  return (
    <MotionLink
      href={`/${slug}`}
      className="flex gap-10 rounded-xl p-4"
      initial="init"
      whileHover="hover"
      variants={PostContainerVariants}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex flex-col justify-between gap-[12px]">
        <div className="flex items-center relative">
          <MotionSpan variants={PostTitleArrowVariants} className="absolute">
            <ChevronRight color="#22C564" />
          </MotionSpan>
          <MotionSpan
            variants={PostTitleVariants}
            className="text-3xl font-medium"
          >
            {title}
          </MotionSpan>
        </div>
        <span className="text-zinc-700 text-base opacity-80">{desc}</span>
        <div className="flex gap-5">
          <span className="text-zinc-400 opacity-80">
            {dayjs(date).format("YYYY년 MM월 DD일")}
          </span>
          {tags.map((tag, index) => (
            <Badge key={index} variant={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </MotionLink>
  );
}

export default PostItem;
