import { useMutation } from '@tanstack/react-query';
import { deleteComment, insertComment, updateComment } from '../../../../supabase/api/comments';

const useCommentMutation = () => {
  const { mutateAsync: createComment } = useMutation({
    mutationFn: ({ userId, nickname, comment, jobPosition }) => insertComment(userId, nickname, comment, jobPosition)
  });

  const { mutateAsync: editComment } = useMutation({
    mutationFn: ({ userId, nickname, comment, jobPosition }) => updateComment(userId, nickname, comment, jobPosition)
  });

  const { mutateAsync: removeComment } = useMutation({
    mutationFn: ({ userId, nickname, comment, jobPosition }) => deleteComment(userId, nickname, comment, jobPosition)
  });

  return { createComment, editComment, removeComment };
};

export default useCommentMutation;
