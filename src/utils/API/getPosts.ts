import { PostgrestResponse, PostgrestError } from "@supabase/supabase-js";
import { PostsType } from "@src/types/postType";
import { createClient } from "@src/utils/supabase/server";

const supabase = createClient();

export const getPosts = async () => {
  const { data }: PostgrestResponse<PostsType> = await supabase
    .from("post")
    .select();

  return data;
};
