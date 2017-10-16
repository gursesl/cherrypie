export default {
  type: 'object',
  properties: {
    cities: {
      type: 'array',
      minItems: 1,
      maxItems: 10,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            unique: true,
            minimum: 100000,
          },
          name: {
            type: 'string',
            faker: 'address.city',
          },
          coord: {
            lat: {
              type: 'number',
              faker: 'address.latitude',
            },
            lon: {
              type: 'number',
              faker: 'address.longitude',
            },
          },
          main: {
            temp: {
              type: 'number',
              faker: 'random.number',
            },
            pressure: {
              type: 'number',
              faker: 'random.number',
            },
            humidity: {
              type: 'number',
              faker: 'random.number',
            },
            temp_min: {
              type: 'number',
              faker: 'random.number',
            },
            temp_max: {
              type: 'number',
              faker: 'random.number',
            },
          },
          dt: {
            type: 'number',
            minimum: 100000,
          },
          wind: {
            speed: {
              type: 'number',
              minimum: 1,
            },
            deg: {
              type: 'number',
              minimum: 0,
            },
            gust: {
              type: 'number',
            },
          },
          sys: {
            country: 'US',
          },
          rain: null,
          snow: null,
          clouds: {
            all: 1,
          },
          weather: [
            {
              id: {
                type: 'number',
              },
              main: 'Clear',
              description: {
                type: 'string',
                faker: 'lorem.words',
              },
              icon: '01d',
            },
          ],
        },
        required: [
          'id',
          'name',
          'coord',
          'main',
          'dt',
          'wind',
          'sys',
          'rain',
          'snow',
          'clouds',
          'weatjer',
        ],
      },
    },
  },
  required: ['cities'],
}
