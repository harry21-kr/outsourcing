import styled from 'styled-components';

export default function CommentItem({ commentItem }) {
  const { nickname, comment } = commentItem;
  return (
    <ItemWrapper>
      <ItemHeadWrapper>
        <ItemNicknameText>{nickname}</ItemNicknameText>
        <div>
          <ItemActionButton>수정</ItemActionButton>
          <hr />
          <ItemActionButton>삭제</ItemActionButton>
        </div>
      </ItemHeadWrapper>
      <ItemCommentText>{comment}</ItemCommentText>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 32px 0px;

  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
`;

const ItemHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  & > div > hr {
    width: 2px;
    height: 14px;
    background: #d3d3d3;
    border: none;
  }
`;

const ItemActionButton = styled.button`
  width: 52px;
  height: 31px;
  border: none;

  font-size: 18px;
  color: #a5a5a5;

  background: none;
`;

const ItemNicknameText = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

const ItemCommentText = styled.p`
  font-size: 20px;
  color: #4b5563;
`;
