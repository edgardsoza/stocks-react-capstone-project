const fetchData = async () => {
    const URL = 'https://financialmodelingprep.com/api/v3/cash-flow-statement/AAPL?limit=120&apikey=32a7228a5dce3f5e80b7d0e3a36e851b';
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  };
  
  export default fetchData;
  