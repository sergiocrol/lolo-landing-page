const API_URL = process.env.WORKER_SIGNUP;
const method = 'POST'
const headers = { 'Content-Type': 'application/json' };

export const workerSignUp = async (workerData) => {
  const requestOptions = {
    method,
    mode: 'no-cors',
    headers,
    body: JSON.stringify(workerData),
  };

  return fetch(`${process.env.NEXT_PUBLIC_WORKER_SIGNUP}/signup`, requestOptions)
    .then(response => {
      return response.json();
    })
    .then(json => {
      // data.json = json;
      return json;
    })
    .catch(error => {
      // data.error = error;
      return error;
    });
};