import axios from 'axios';

export const fetchData = (
  url: string,
  handleSuccess: (...args: any[]) => void,
  handleFail: (...args: any[]) => void
) =>
  axios
    .get(url)
    .then(function (response) {
      handleSuccess(response.data);
    })
    .catch(function (error) {
      handleFail(true);
    });
