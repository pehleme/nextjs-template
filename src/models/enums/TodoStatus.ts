export enum TodoStatus {
  COMPLETED,
  IN_PROGRESS,
}

export const TodoStatusDescription: { [key in TodoStatus]: string } = {
  [TodoStatus.COMPLETED]: 'Concluído',
  [TodoStatus.IN_PROGRESS]: 'Em progresso',
};