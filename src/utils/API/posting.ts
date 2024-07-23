import { createClient } from "@src/utils/supabase/client";

const supabase = createClient();
export const posting = async (
  title: string,
  content: string,
  category: string
) => {
  const { data, error, status } = await supabase
    .from("post")
    .insert([{ title, content, category }])
    .select();

  return { data, error, status };
};
