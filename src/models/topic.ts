export interface ITopic {
  id: number;
  title: string;
  message?: string;
  authorAvatar: string;
  authorName: string;
  answers: number;
  creationDate?: Date;
}
