import { getForecastFeature, getForecastSchema } from './features/get-forecast.feature'

export const weatherService = (fastify, opts, next) => {
  fastify.get('/:locales/:days', { schema: getForecastSchema }, getForecastFeature)

  next()
}
