import { weatherService } from './weather/weather.service'

export const rootService = (fastify, opts, next) => {
  fastify.register(weatherService, { prefix: '/weather' })
  next()
}
