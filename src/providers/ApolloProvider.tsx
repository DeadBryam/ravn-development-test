import { ApolloProvider } from '@apollo/client';

import { apolloClient } from '@/apollo/apolloClient';

type ApolloAppProviderProps = {
  children: React.ReactNode;
};

const ApolloAppProvider = ({ children }: ApolloAppProviderProps) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export { ApolloAppProvider };
