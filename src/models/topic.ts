export type ITopic = {
  id: number;
  answers: IAnswer[];
  authorId: number;
  authorName: string;
  avatar: string;
  title: string;
  message: string;
  status: 'NOT_ANSWERED' | 'CLOSED';
  tags: string[];
  totalOfAnswers: number;
  name: string;
}

export interface IAnswer {
  answerLikes: number;
  authorAvatar: string;
  authorName: string;
  authorId: number;
  id: number;
  message: string;
}
