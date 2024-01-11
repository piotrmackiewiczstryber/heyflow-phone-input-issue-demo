'use client';

import { LS } from '@/services/localStorage';

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';
type Params<Payload> = {
  method: Method;
  payload?: Payload;
  auth?: boolean;
};

export type FetchError = Error & {
  cause: {
    code: number;
  };
};

export const fetchData = async <Response, Payload>(
  url: string,
  params: Params<Payload>
): Promise<Response> => {
  const { method = 'GET', payload } = params;
  const token = LS.getItem('accessToken');
  const authHeader: object = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};

  const init: RequestInit = {
    method,
    headers: {
      ...authHeader,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  const response = await fetch(url, init);
  let json: any = {};
  try {
    json = await response.json();
  } catch (e: any) {
    json.error = e.message;
    console.log(e);
  }
  if (!response.ok) {
    // unauthorized
    // token expired - here should be refresh token logic + re-request
    if (response.status === 401) {
      document.location.href = '/login';
      LS.removeItem('accessToken');
    }
    const errorMessage = json.error
      ? json.error
      : `${response.status} ${response.statusText}: ${JSON.stringify(json)}`;
    throw new Error(errorMessage, {
      cause: { code: response.status },
    } as FetchError);
  }

  return json;
};

export const useFetch = <Response, Payload = object>(
  url: string,
  method: Method
) => {
  return (payload: Payload) => {
    const params: Params<Payload> = {
      method,
    };
    if (method === 'POST' || method === 'PATCH') {
      if (payload) {
        params.payload = payload;
      }
    }
    return fetchData<Response, Payload>(url, params);
  };
};
