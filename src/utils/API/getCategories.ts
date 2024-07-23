import { PostgrestResponse } from "@supabase/supabase-js";
import { createClient } from "@src/utils/supabase/client";
import { CategoryType } from "@src/types/categoryType";
const supabase = createClient();

export const getCategories = async () => {
  const { data: category, error }: PostgrestResponse<CategoryType> =
    await supabase.from("category").select("*");

  return {
    category,
    error,
  };
};
