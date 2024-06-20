import { useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { signInAnonymously } from '../../supabase/api/auth';
import useCommentMutation from './hooks/mutation/useCommentMutation';

export default function CommentForm({ session }) {
  const { position } = useParams();

  const { mutateAsync: signIn } = useMutation({
    mutationFn: () => signInAnonymously()
  });

  const { createComment } = useCommentMutation();

  async function handleSignInAnonymously(e) {
    e.preventDefault();
    if (session) {
      await createComment({
        userId: session.user.id,
        nickname: '박원빈',
        comment: '프론트엔드재밌어요!',
        jobPosition: position
      });
    } else {
      await signIn();
    }
  }

  return (
    <CommentFormBackground>
      <CommentFormWrapper onSubmit={handleSignInAnonymously}>
        <NicknameInput placeholder="닉네임" />
        <CommentInput placeholder="내용을 입력해주세요." />
        <SubmitButton>코멘트 남기기</SubmitButton>
      </CommentFormWrapper>
    </CommentFormBackground>
  );
}

const CommentFormBackground = styled.div`
  width: calc(100% + 80px);
  margin: 0px -40px;
  background-color: #fafafa;
`;

const CommentFormWrapper = styled.form`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin: 0px 40px;

  padding: 40px 0px;
`;

const NicknameInput = styled.input`
  height: 56px;
  padding: 0px 30px;

  border: 1px solid #e5e5e5;
  border-radius: 14px;

  font-size: 20px;

  outline: none;

  &::placeholder {
    color: #dedede;
  }
`;

const CommentInput = styled.textarea`
  height: 120px;
  padding: 24px 30px;

  border: 1px solid #e5e5e5;
  border-radius: 14px;

  font-size: 20px;

  outline: none;

  &::placeholder {
    color: #dedede;
  }
`;

const SubmitButton = styled.button`
  height: 54px;
  border-radius: 17px;
  background: #cacaca;
  border: none;

  font-size: 24px;
  font-weight: bold;
  color: white;
`;
