# Next.js starter template.

- TypeScript
- Next.js
- ESLint
- Prettier
- Tailwind CSS

# React Query を使う場合

```
yarn add react-query
```

```
// _app.tsx
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: false,
						refetchOnWindowFocus: false,
					},
				},
			}),
	);

return (
	<QueryClientProvider client={queryClient}>
		<Component {...pageProps} />
		<ReactQueryDevtools />
	</QueryClientProvider>
	);
```


git branch -M main
git remote add origin https://github.com/uchiyama-shouta/next-template.git
git push -u origin main