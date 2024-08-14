"use client";
import PostItem from "@src/components/Post/PostItem/PostItem";
import { PostPreviewType } from "@src/types/postPreviewType";
import SearchBar from "@src/components/Common/Header/SearchBar/SearchBar";
import { useState } from "react";

interface PostListProps {
  posts: PostPreviewType[];
}

const PostList = ({ posts }: PostListProps) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {posts
        .filter((val) => {
          return val.title.includes(searchValue);
        })
        .map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
    </>
  );
};

export default PostList;
