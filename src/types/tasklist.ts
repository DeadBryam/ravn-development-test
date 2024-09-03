import { Status, Task } from '@/__generated__/types';

export type TasksList = Array<{ status: Status; tasks: Task[] }>;
