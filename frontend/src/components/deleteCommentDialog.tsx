"use client";

import { deleteComment } from "@/utils/deleteComment";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useToast } from "./ui/use-toast";

type CommentDeleteButtonProps = {
  commentId: number;
  jwtToken: string;
};

export const CommentDeleteDialog = ({
  commentId,
  jwtToken,
}: CommentDeleteButtonProps) => {
  const router = useRouter();
  const { toast } = useToast();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash className="mr-2 h-4 w-4" />
          削除する
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>確認</DialogTitle>
        </DialogHeader>
        <DialogDescription>削除しますか?</DialogDescription>
        <DialogFooter>
          <DialogClose>
            <Button
              variant="destructive"
              onClick={async () => {
                try {
                  await deleteComment({ commentId, jwtToken });
                  router.refresh();
                  toast({
                    description: "🔥削除に成功しました!🔥",
                  });
                } catch (error) {
                  console.error(error);
                  toast({
                    variant: "destructive",
                    description: "削除に失敗しました...😭",
                  });
                }
              }}
            >
              <Trash className="mr-2 h-4 w-4" />
              削除する
            </Button>
          </DialogClose>
          <DialogClose>
            <Button variant="outline">キャンセル</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
