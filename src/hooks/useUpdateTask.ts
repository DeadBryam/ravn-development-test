import { StoreObject, useMutation } from '@apollo/client';

import { Mutation, MutationUpdateTaskArgs } from '@/__generated__/types';
import { UPDATE_TASK } from '@/graphql/mutations';
import { GET_TASKS } from '@/graphql/queries';

type UpdateTaskMutation = {
  updateTask: Mutation['updateTask'];
};

const useUpdateTask = () => {
  return useMutation<UpdateTaskMutation, MutationUpdateTaskArgs>(UPDATE_TASK, {
    refetchQueries: [{ query: GET_TASKS, variables: { input: {} } }],
    awaitRefetchQueries: true,
    update: (cache, { data }) => {
      cache.modify({
        id: cache.identify(data?.updateTask as StoreObject),
        fields: {
          name() {
            return data?.updateTask.name;
          },
        },
      });
    },
  });
};

export { useUpdateTask };
