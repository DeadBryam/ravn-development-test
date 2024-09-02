import { useQuery } from '@apollo/client';

import { Query, User } from '@/__generated__/types';
import { GET_PROFILE } from '@/graphql/queries';

type GetProfileQuery = {
  profile: Query['profile'];
};

const useGetProfile = () => {
  return useQuery<GetProfileQuery, User>(GET_PROFILE);
};

export { useGetProfile };
