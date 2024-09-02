import { useMutation } from '@apollo/client';

import { Mutation, MutationCreateTaskArgs } from '@/__generated__/types';
import { CREATE_TASK } from '@/graphql/mutations';
import { GET_TASKS } from '@/graphql/queries';

type CreateTaskMutation = {
  createTask: Mutation['createTask'];
};

const useCreateTask = () => {
  return useMutation<CreateTaskMutation, MutationCreateTaskArgs>(CREATE_TASK, {
    refetchQueries: [{ query: GET_TASKS, variables: { input: {} } }],
    awaitRefetchQueries: true,
  });
};

export { useCreateTask };
