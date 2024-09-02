import { useMutation } from '@apollo/client';

import { Mutation, MutationDeleteTaskArgs } from '@/__generated__/types';
import { DELETE_TASK } from '@/graphql/mutations';
import { GET_TASKS } from '@/graphql/queries';

type DeleteTaskMutation = {
  deleteTask: Mutation['deleteTask'];
};

const useDeleteTask = () => {
  return useMutation<DeleteTaskMutation, MutationDeleteTaskArgs>(DELETE_TASK, {
    refetchQueries: [{ query: GET_TASKS, variables: { input: {} } }],
    awaitRefetchQueries: true,
  });
};

export { useDeleteTask };
