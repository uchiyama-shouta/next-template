# Next.js starter template.

- TypeScript
- Next.js
- ESLint
- Prettier
- Tailwind CSS

```
mkdir src/components
```

# React Query を使う場合

```
yarn add react-query
```

```TSX
// _app.tsx
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
})
function MyApp({ Component, pageProps }: AppProps) {
   return (
	   <QueryClientProvider client={queryClient}>
		   <Component {...pageProps} />
		   <ReactQueryDevtools />
	   </QueryClientProvider>
	);
};
```

# Apollo Client を使う場合

```
yarn add @apollo/client
```

```TSX
// _app.tsx
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
   uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
   cache: new InMemoryCache()
});

return (
   <ApolloProvider client={client}>
      <Component {...pageProps} />
   </ApolloProvider>
);
```