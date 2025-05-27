import { env } from './env'
import { app } from './app'

const port = env.PORT || 3333

app
  .listen({
    port,
  })
  .then(() => {
    console.log('HTTP server running')
  })
