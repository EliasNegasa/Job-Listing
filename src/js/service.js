const url = 'https://my.api.mockaroo.com/jobs.json?key=7d344dd0';

const getJobs = () => {
  return axios.get(url);
};
