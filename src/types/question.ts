export type QuestionType =
  | 'multiple-choice'
  | 'complex-multiple-choice'
  | 'true-false-table';

export interface QuestionOption {
  key: string;
  text: string;
}

export interface QuestionSolution {
  answerSummary: string;
  correctOptionKey?: string;
  correctCheckboxIndices?: number[];
  correctTrueFalse?: { [index: number]: 'Benar' | 'Salah' };
  steps: string[];
  note?: string;
}

export interface QuestionItem {
  id: number;
  topic: string;
  type: QuestionType;
  storyContext?: string;
  boxedProblem?: {
    title: string;
    text: string;
    footerQuestion: string;
  };
  questionText: string;
  note?: string;
  visualId?: string;
  options?: QuestionOption[];
  checkboxOptions?: string[];
  statements?: string[];
  trueFalseHeaders?: [string, string, string];
  solution: QuestionSolution;
}

export interface UserAnswerState {
  [questionId: number]: {
    selectedOption?: string;
    selectedCheckboxes?: number[];
    trueFalseAnswers?: { [statementIndex: number]: 'Benar' | 'Salah' };
  };
}
