"use client";
import PostItem from "@src/components/Post/PostItem/PostItem";
import { useEffect, useState } from "react";
import { PostsType } from "@src/types/postType";
import { Skeleton } from "@src/components/ui/skeleton";
import { useContext } from "react";
import { CategoryContext } from "@src/context/CategoryContext";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

const PostList = () => {
  const [posts, setPosts] = useState<PostsType[]>([]);
  const { selectCategory } = useContext(CategoryContext);

  if (!posts.length) {
    return (
      <>
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <div key={index} className="flex flex-col gap-5 w-full">
              <div className="flex items-center space-x-4 h-[124px]">
                <div className="space-y-4 w-full">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </>
  );
};

export default PostList;
