import { useQuery } from '@apollo/client';

import { initializeApollo } from '@lib/apollo/client';

import { ViewerQuery } from '@graphql/queries/viewerQuery';

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ViewerQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default function Home() {
  const {
    data: { viewer },
  } = useQuery(ViewerQuery);

  return (
    <div>
      You're signed in as {viewer.name} and you're {viewer.status} goto static
      page.
    </div>
  );
}
