import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const supabase = createClient();
  const { data: post } = await supabase.from("post").select();

  return <div>content</div>;
}
