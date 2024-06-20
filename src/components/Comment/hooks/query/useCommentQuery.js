import { useQuery } from '@tanstack/react-query';
import { getComments } from '../../../../supabase/api/comments';

const useCommentQuery = () => {
  const { data: comments } = useQuery({
    queryKey: ['comments'],
    queryFn: () => getComments(),
    initialData: []
  });

  return comments;
};

export default useCommentQuery;
