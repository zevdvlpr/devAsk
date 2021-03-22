import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '@lib/apollo/client';

import { colors } from '@config/colors';

import { GlobalStyles } from '@styles/global';

export default function _App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={colors}>
        <GlobalStyles />

        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
