import styled from 'styled-components';
import CommentItem from './CommentItem';
import useCommentQuery from './hooks/query/useCommentQuery';

export default function CommentList() {
  const comments = useCommentQuery();

  return (
    <ListWrapper>
      {comments.map((comment) => (
        <CommentItem key={comment.id} commentItem={comment} />
      ))}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  width: 100%;
  padding: 0px;
`;
