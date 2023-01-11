import { ResponseType } from "../interfaces/response";

export const get = async <T>(url: string): Promise<T> => {
  const requestOptions = {
    method: 'GET',
    headers: {},
  };

  try {
    const response = await fetch(url, requestOptions);
    const data: ResponseType<T> = await response.json();
    return data.result!;
  } catch (err) {
    let message = 'Unknown Error';
    if (err instanceof Error) message = err.message;
    throw new Error(message); 
  }
};
