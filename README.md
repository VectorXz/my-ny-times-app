# New York Times Web React app

This website is live demo on https://nervous-brattain-a61a14.netlify.app/

This website was created by Patiphol Pussawong and API served by New York Times API.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First setting environment variables,
Create .env.local file for creating environment variables

```
API_KEY=<your api key>
NEXT_PUBLIC_BASE_URL=<your base url without ending slash(/)>
```

Example.
```
API_KEY=ABCDEFG123456789
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Compile and run server

Compile by

```
npm run build
```

Start server by
```
npm run start
```