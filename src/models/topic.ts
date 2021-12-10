export interface ITopic {
  id: number;
  title: string;
  message?: string;
  avatar: string;
  name: string;
  tags: string[];
  totalOfAnswers: number;
  status: "NOT_ANSWERED" | "CLOSED";
}
