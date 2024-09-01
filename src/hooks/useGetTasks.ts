import { useQuery } from '@apollo/client';

import { Query, QueryTasksArgs } from '@/__generated__/types';
import { GET_TASKS } from '@/graphql/queries';

type GetTasksQuery = {
  tasks: Query['tasks'];
};

const useGetTasks = ({ input }: QueryTasksArgs = { input: {} }) => {
  return useQuery<GetTasksQuery, QueryTasksArgs>(GET_TASKS, {
    variables: { input },
  });
};

export { useGetTasks };
