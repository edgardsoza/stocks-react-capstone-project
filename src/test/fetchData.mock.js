const fetchData = jest.fn(() => Promise.resolve([
  { date: '2021-01-01', netCashProvidedByOperatingActivities: 1000 },
  { date: '2022-01-01', netCashProvidedByOperatingActivities: 2000 },
  { date: '2023-01-01', netCashProvidedByOperatingActivities: 3000 },
]));

export default fetchData;
