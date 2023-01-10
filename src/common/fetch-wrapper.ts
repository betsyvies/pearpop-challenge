export const handleResponse = async (res: any) => {
  if (res.error) return res.error;
  const data = await res.json();
  return JSON.parse(data);
};

export const get = (url: string) => {
  const requestOptions = {
    method: 'GET',
    headers: {},
  };
  return fetch(url, requestOptions).then(handleResponse);
};
