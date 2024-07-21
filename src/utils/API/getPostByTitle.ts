import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { PostsType } from "@src/types/postType";
import { createClient } from "@src/utils/supabase/server";

const supabase = createClient();

export const getPostByTitle = async (title: string) => {
  const { data, error }: PostgrestSingleResponse<PostsType> = await supabase
    .from("post")
    .select("*")
    .eq("title", title)
    .single();

  return {
    data,
    error,
  };
};
