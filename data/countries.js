const countries = [
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1e6-1f1e9.svg',
      country: 'Andorra',
      code: 'ad'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f1.svg',
      country: 'Albania',
      code: 'al'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f2.svg',
      country: 'Armenia',
      code: 'am'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f9.svg',
      country: 'Austria',
      code: 'at'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ff.svg',
      country: 'Azerbaijan',
      code: 'az'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ea.svg',
      country: 'Belgium',
      code: 'be'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ec.svg',
      country: 'Bulgaria',
      code: 'bg'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fe.svg',
      country: 'Belarus',
      code: 'by'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ed.svg',
      country: 'Switzerland',
      code: 'ch'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fe.svg',
      country: 'Cyprus',
      code: 'cy'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ea.svg',
      country: 'Germany',
      code: 'de'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f0.svg',
      country: 'Denmark',
      code: 'dk'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ea.svg',
      country: 'Estonia',
      code: 'ee'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f8.svg',
      country: 'Spain',
      code: 'es'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1eb-1f1ee.svg',
      country: 'Finland',
      code: 'fi'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f7.svg',
      country: 'France',
      code: 'fr'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e7.svg',
      country: 'United Kingdom',
      code: 'gb'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ea.svg',
      country: 'Georgia',
      code: 'ge'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f7.svg',
      country: 'Greece',
      code: 'gr'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f7.svg',
      country: 'Croatia',
      code: 'hr'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1ed-1f1fa.svg',
      country: 'Hungary',code: 'hu'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1ee-1f1ea.svg',
      country: 'Ireland',
      code: 'ie'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f8.svg',
      country: 'Iceland',
      code: 'is'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f9.svg',
      country: 'Italy',
      code: 'it'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ff.svg',
      country: 'Kazakhstan',
      code: 'kz'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f1-1f1ee.svg',
      country: 'Liechtenstein',
      code: 'li'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f9.svg',
      country: 'Lithuania',
      code: 'lt'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fa.svg',
      country: 'Luxembourg',
      code: 'lu'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fb.svg',
      country: 'Latvia',
      code: 'lv'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e8.svg',
      country: 'Monaco',
      code: 'mc'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e9.svg',
      country: 'Moldova',
      code: 'md'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ea.svg',
      country: 'Montenegro',
      code: 'me'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f0.svg',
      country: 'North Macedonia',
      code: 'mk'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f9.svg',
      country: 'Malta',
      code: 'mt'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f1.svg',
      country: 'Netherlands',
      code: 'nl'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f4.svg',
      country: 'Norway',
      code: 'no'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f1.svg',
      country: 'Poland',
      code: 'pl'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f9.svg',
      country: 'Portugal',
      code: 'pt'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f7-1f1f4.svg',
      country: 'Romania',
      code: 'ro'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f7-1f1f8.svg',
      country: 'Serbia',
      code: 'yu'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fa.svg',
      country: 'Russia',
      code: 'ru'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ea.svg',
      country: 'Sweden',
      code: 'se'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ee.svg',
      country: 'Slovenia',
      code: 'si'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f0.svg',
      country: 'Slovakia',
      code: 'sk'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f2.svg',
      country: 'San Marino',
      code: 'sm'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f7.svg',
      country: 'Turkey',
      code: 'tr'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1fa-1f1e6.svg',
      country: 'Ukraine',
      code: 'ua'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1fb-1f1e6.svg',
      country: 'Vatican City',
      code: 'va'
    },
    {
      flag: 'https://twemoji.maxcdn.com/2/svg/1f1fd-1f1f0.svg',
      country: 'Kosovo',
      code: 'xk'
    }
  ]

  export default countries;