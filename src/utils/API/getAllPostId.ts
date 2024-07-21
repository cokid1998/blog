import { PostgrestResponse } from "@supabase/supabase-js";
import { PostsType } from "@src/types/postType";
import { createClient } from "@src/utils/supabase/server";

const supabase = createClient();

export const getAllPostId = async () => {
  const { data, error }: PostgrestResponse<PostsType> = await supabase
    .from("post")
    .select("id");

  return {
    data,
    error,
  };
};
