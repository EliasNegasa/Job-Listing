const url = 'https://my.api.mockaroo.com/jobs.json';
const key = '66c72b30';

const getJobs = () => {
  return axios.get(`${url}?key=${key}`);
};
