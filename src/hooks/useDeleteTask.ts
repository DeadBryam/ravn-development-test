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
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          tasks(existingTasks = []) {
            return existingTasks.filter((taskRef: any) => taskRef.__ref !== `Task:${data?.deleteTask.id}`);
          },
        },
      });
    },
  });
};

export { useDeleteTask };
