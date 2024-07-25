import { PostgrestResponse } from "@supabase/supabase-js";
import { createClient } from "@src/utils/supabase/client";
import { PostsType } from "@src/types/postType";
const supabase = createClient();

export const getSelectCategoryPosts = async (category: string) => {
  const { data, error }: PostgrestResponse<PostsType> = await supabase
    .from("post")
    .select("*")
    .eq("category", category)
    .order("created_at", { ascending: false });

  return {
    data,
    error,
  };
};
