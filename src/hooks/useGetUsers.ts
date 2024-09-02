import { useQuery } from '@apollo/client';

import { Query, User } from '@/__generated__/types';
import { GET_USERS } from '@/graphql/queries';

type GetUsersQuery = {
  users: Query['users'];
};

const useGetUsers = () => {
  return useQuery<GetUsersQuery, Array<User>>(GET_USERS);
};

export { useGetUsers };
