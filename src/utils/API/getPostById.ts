import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { PostsType } from "@src/types/postType";
import { createClient } from "@src/utils/supabase/server";

const supabase = createClient();

export const getPostById = async (id: string) => {
  const { data, error }: PostgrestSingleResponse<PostsType> = await supabase
    .from("post")
    .select("*")
    .eq("id", id)
    .single();

  return {
    data,
    error,
  };
};
