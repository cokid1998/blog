import { PostgrestResponse, PostgrestError } from "@supabase/supabase-js";
import { PostsType } from "@/types/postType";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export const getPosts = async () => {
  const { data }: PostgrestResponse<PostsType> = await supabase
    .from("post")
    .select();

  return data;
};
