export default {
  type: 'object',
  properties: {
    searchByCityName: {
      type: 'object',
      properties: {
        cod: {
          type: 'integer',
          minimum: 1,
          maximum: 500,
        },
        message: {
          type: 'number',
          minimum: 1,
          maximum: 3,
        },
        cnt: {
          type: 'integer',
          minimum: 1,
          maximum: 40,
        },
        list: {
          type: 'array',
          minItems: 1,
          maxItems: 40,
          items: {
            type: 'object',
            properties: {
              dt: {
                type: 'number',
                unique: true,
                minimum: 100000,
              },
              main: {
                temp: {
                  type: 'number',
                  minimum: 273,
                  maximum: 300,
                },
                temp_min: {
                  type: 'number',
                  minimum: 273,
                  maximum: 300,
                },
                temp_max: {
                  type: 'number',
                  minimum: 273,
                  maximum: 300,
                },
                pressure: {
                  type: 'number',
                  minimum: 800,
                  maximum: 1500,
                },
                sea_level: {
                  type: 'number',
                  faker: 'random.number',
                },
                grnd_level: {
                  type: 'number',
                  faker: 'random.number',
                },
                humidity: {
                  type: 'number',
                  faker: 'random.number',
                },
                temp_kf: {
                  type: 'number',
                  faker: 'random.number',
                },
              },
              weather: {
                type: 'array',
                minItems: 1,
                maxItems: 3,
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'number',
                      unique: true,
                      minimum: 100000,
                    },
                    main: {
                      type: 'string',
                      faker: 'lorem.word',
                    },
                    description: {
                      type: 'string',
                      faker: 'lorem.words',
                    },
                    icon: {
                      type: 'string',
                      chance: {
                        pickone: [
                          [
                            '01d',
                            '02d',
                            '03d',
                            '04d',
                            '09d',
                            '10d',
                            '11d',
                            '13d',
                            '50d',
                          ],
                        ],
                      },
                    },
                  },
                },
              },
              clouds: {
                type: 'number',
                minimum: 0,
                maximum: 2,
              },
              wind: {
                type: 'object',
                properties: {
                  speed: {
                    type: 'number',
                    minimum: 5,
                    maximum: 40,
                  },
                  deg: {
                    type: 'number',
                    minimum: 1,
                    maximum: 360,
                  },
                },
              },
              sys: {
                type: 'object',
                properties: {
                  pod: 'd',
                },
              },
              dt_txt: {
                type: 'string',
                faker: 'date.recent',
              },
            },
          },
        },
        city: {
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
            country: 'US',
          },
        },
      },
    },
  },
}
