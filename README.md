## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Developer notes

A/C provided for task don't let to use Next.js features in full (mock data used as initial state of data).According to that application works more as a client not server.

To finish task without having database or at least some server mimic is not possible - each refresh resets data.

As mentioned above application works in a bit React way - client. However some functionalities like Edit details page uses a bit more Next.js approach. App CRUD misses edit functionality due to lack of database.

Some basic components were added to demonstrate reusability. Features created using recursive way - PLEASE BE AWARE - Not greatest idea for performance, especially on the client site. Making data structure flat perhaps would be better approach. Some examples how we could travers data also demonstrated in this project - details page.

### Summary

App mostly built in 'react way' less Next - some kind of hybrid of both - please viev A/Cs.
To build the app in the 'next way' database required or some server environment i.e json server.
