const API_URL = process.env.WORKER_SIGNUP;
const method = 'POST'
const headers = { 'Content-Type': 'application/json' };

export const workerSignUp = async (workerData) => {
  const requestOptions = {
    method,
    headers,
    body: JSON.stringify(workerData),
  };

  let data = {json: '', error: ''};
  return fetch(`${process.env.NEXT_PUBLIC_WORKER_SIGNUP}/signup`, requestOptions)
    .then(response => {
      console.log(response);
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