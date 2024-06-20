import supabaseClient from '../supabaseClient';

export async function getComments() {
  const { data: comments } = await supabaseClient.from('COMMENTS').select();
  return comments;
}

export async function getCommentsByJobPosition(jobPosition) {
  const { data: comments } = await supabaseClient.from('COMMENTS').select().eq('jobPosition', jobPosition);
  return comments;
}

export async function insertComment(userId, nickname, comment, jobPosition) {
  const { error } = await supabaseClient
    .from('COMMENTS')
    .insert({ user_id: userId, nickname: nickname, comment: comment, job_position: jobPosition });

  if (error) throw new Error(error);
}

export async function updateComment(userId, comment) {
  const { error } = await supabaseClient.from('COMMENTS').update({ comment: comment }).eq('user_id', userId);

  if (error) throw new Error(error);
}

export async function deleteComment(id, userId) {
  const { error } = await supabaseClient.from('COMMENTS').delete().eq('id', id).eq('user_id', userId);

  if (error) throw new Error(error);
}
