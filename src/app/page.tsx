import { getPosts } from "@src/utils/API/getPosts";

export default async function Index() {
  const data = await getPosts();
  console.log(data);
  if (!data) return null;
  return (
    <div className="bg-red-500">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}
