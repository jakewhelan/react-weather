import fetch from 'node-fetch'
import path from 'path'

const { key } = require(path.join(process.cwd(), 'api.key'))

export const getForecastSchema = {
  params: {
    type: 'object',
    properties: {
      locales: { type: 'string' },
      days: { type: 'number', minimum: 0, maximum: 5 }
    },
    required: ['locales']
  }
}

/**
 * Get n day (max 5) weather forecast for up to three
 * locations from apixu weather API
 * @method GET
 * @function getForecastFeature
 * @param {FastifyRequestInstance} request
 * @param {FastifyReplyInstance} reply
 */
export const getForecastFeature = async (request, reply) => {
  const { locales, days } = request.params
  const localeList = locales.split(',')

  if (localeList.length > 3) {
    reply.type('application/json').code(400)
    return {
      statusCode: 400,
      error: 'Bad Request',
      message: 'Coma seperated list may only contain a maximum of 3 items'
    }
  }

  request.log.info(`Getting weather information from apixu for locales: ${localeList} with key ${key}`)

  const forecast = await Promise.all(localeList
    .map(locale => {
      return fetch(`http://api.apixu.com/v1/forecast.json?key=${key}&q=${locale}&days=${days}`)
        .then(response => response.json())
    }))
    .catch(err => {
      if (err) request.log.error(`Problem getting weather: ${err}`)
      return null
    })

  if (!forecast) {
    reply.type('application/json').code(503)
    return {
      statusCode: 503,
      error: 'Service Unavailable',
      message: 'Unable to reach weather server'
    }
  }

  const successMessage = `Successfully retrieved weather information for locales: ${localeList}`

  request.log.info(successMessage)
  reply.type('application/json').code(200)

  return {
    statusCode: 200,
    message: successMessage,
    data: forecast.map(({
      location: {
        name,
        country
      },
      current: {
        temp_c: celcius,
        temp_f: fahrenheit,
        condition: {
          text: conditionText,
          icon: conditionIcon
        }
      },
      forecast: {
        forecastday
      }
    }) => ({
      name,
      country,
      now: {
        celcius,
        fahrenheit,
        conditionText,
        conditionIcon
      },
      forecast: forecastday
        .map(({ date, day }) => ({
          day: new Date(date).toLocaleDateString('en-us', { weekday: 'long' }),
          celcius: day.avgtemp_c,
          fahrenheit: day.avgtemp_f,
          conditionText: day.condition.text,
          conditionIcon: day.condition.icon
        }))
    }))
  }
}
