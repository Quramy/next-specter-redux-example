# next-specter-redux

This is a demonstration repository using Next.js, Redux, and Specter.

## Setup

- Clone this repository
- Execute the following

```sh
$ yarn --pure-lockfile
$ yarn dev
```

## Directory structures

```
─ src
 ├── components
 │   └── organisms                          # Organisms Components use
 │       ├── PostDetail
 │       │   ├── index.tsx                 # index.tsx is connected to Redux state
 │       │   └── presentation.tsx          # Dumb component
 │       └── Posts
 │           ├── index.tsx
 │           └── presentation.tsx
 ├── models                                  # TypeScript type definition shared from both server and client
 │   ├── errors.ts
 │   └── post.ts
 ├── pages
 │   ├── _app.tsx
 │   ├── index.tsx
 │   ├── post
 │   │   └── [id].tsx
 │   └── posts.tsx
 ├── redux
 │   ├── createStore.ts
 │   ├── modules                            # Redux modules (Ducks pattern)
 │   │   ├── index.ts
 │   │   └── resources                     # Resource modules are responsible to manage state fetched API responce
 │   │       ├── index.ts
 │   │       ├── postDetail
 │   │       │   └── index.ts
 │   │       └── posts
 │   │           └── index.ts
 │   └── next-integration
 │       └── serverSideSteps.ts
 ├── server                                  # Sources for Custom Next Server
 │   ├── server.ts
 │   └── services                           # Each service provides API to corresponding Redux resource module
 │       ├── index.ts
 │       ├── postDetail.ts
 │       └── posts.ts
 └── utililty-functions
     └── *.ts
```
