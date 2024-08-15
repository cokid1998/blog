"use client";
import { useState } from "react";
import PostItem from "@src/components/Post/PostItem/PostItem";
import { PostPreviewType } from "@src/types/postPreviewType";
import SearchBar from "@src/components/Common/SearchBar/SearchBar";
import TagSelector from "@src/components/Common/TagSelector/TagSelector";

interface PostListProps {
  posts: PostPreviewType[];
}

const PostList = ({ posts }: PostListProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectTag, setSelectTag] = useState("ALL");
  const tags = ["ALL", ...new Set(posts.flatMap((post) => post.tags))];

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <TagSelector
        tags={tags}
        selectTag={selectTag}
        setSelectTag={setSelectTag}
      />
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
