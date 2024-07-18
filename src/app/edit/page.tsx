"use client";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { Input } from "@src/components/ui/input";
import { Button } from "@src/components/ui/button";
import { useToast } from "@src/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { posting } from "@src/utils/API/posting";

const edit = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<string | undefined>("# Hello World");

  const onSubmit = async () => {
    if (!title || !content) {
      toast({
        title: "기입되지 않은 데이터(값)가 있습니다.",
        description: "제목, 콘텐츠를 모두 작성해주세요.",
      });
    } else {
      const { error, status } = await posting(title, content);
      if (error) {
        console.log(error);
        toast({
          title: "무엇인가 에러가 발생했습니다.",
          description: "콘솔창을 확인해주세요",
        });
      } else if (status === 201) {
        toast({
          title: "포스팅 완료",
          description: "포스팅이 Supabase에 저장됐습니다.",
        });
        router.push("/");
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <Input
        value={title}
        placeholder="제목을 입력해주세요"
        className="h-12 text-2xl"
        onChange={(e) => setTitle(e.target.value)}
      />
      <MDEditor
        height={700}
        value={content}
        onChange={setContent}
        minHeight={600}
      />
      <Button onClick={onSubmit} className="bg-green-500 hover:bg-green-400">
        등록
      </Button>
    </div>
  );
};

export default edit;
