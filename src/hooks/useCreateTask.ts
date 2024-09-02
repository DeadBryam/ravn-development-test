import { StoreObject, useMutation } from '@apollo/client';

import { Mutation, MutationCreateTaskArgs } from '@/__generated__/types';
import { CREATE_TASK, TASK_FRAGMENT } from '@/graphql/mutations';
import { GET_TASKS } from '@/graphql/queries';

type CreateTaskMutation = {
  createTask: Mutation['createTask'];
};

const useCreateTask = () => {
  return useMutation<CreateTaskMutation, MutationCreateTaskArgs>(CREATE_TASK, {
    refetchQueries: [{ query: GET_TASKS, variables: { input: {} } }],
    awaitRefetchQueries: true,
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          tasks(existingTasks = []) {
            const newTaskRef = cache.writeFragment({
              data: data?.createTask as StoreObject,
              fragment: TASK_FRAGMENT,
            });
            return [...existingTasks, newTaskRef];
          },
        },
      });
    },
  });
};

export { useCreateTask };
