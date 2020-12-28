# How to mock

We can intercept HTTP calls to redefine the response. It can be interesting when Next.js does not communicate with an API. 

## Requirements

* [Mock Service Worker](https://github.com/mswjs/msw)
* Next.js

## Getting started

First of all, install the needed library 

```
yarn add msw --dev
```

Create a folder `/mocks` which will store all the mock logic.

In the `mocks/` folder, create 4 files:
* `browser.js`, provide a SetupWorker
* `handlers.js`, define all routes to mock with custom responses
* `index.js`, load SetupWorker or Serverworker depending of the current context
* `server.js`, provide a setupServer

### Implement msw library

In `mocks/browser.js` :

```
import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)
```

In `handler.js` : 

```
import { rest } from 'msw'

export const handlers = [
    rest.get('custom/route', (req, res, ctx) => {
        return res(
            ctx.json({
                custom: 'data'
            })
        )
    }),
]
```

In `server.js` :

```
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
```

In `index.js` : 

```
if (typeof window === 'undefined') {
    const { server } = require('./server')
    server.listen()
} else {
    const { worker } = require('./browser')
    worker.start()
}
```

### Running application

Before running application, do not forget to init the public directory 

`npx msw init ./public`

## Sources

[Next.js example implementation](https://github.com/vercel/next.js/tree/canary/examples/with-msw)