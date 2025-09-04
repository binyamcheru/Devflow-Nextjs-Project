import qs from "query-string";

interface UrlQueryParams {
  params: string; // Existing query parameters as a string, e.g., "query=example&page=2"
  key: string; // The key to update or add, e.g., "query"
  value: string; // The new value for the key, e.g., "newsearch"
}

interface RemoveUrlQueryParams {
  params: string; // Existing query parameters as a string, e.g., "query=example&page=2"
  keysToRemove: string[]; // The keys to remove, e.g., ["query", "page"]
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const queryString = qs.parse(params); // Parse the existing query parameters into an object like { query: 'example', page: '2' }
  queryString[key] = value; // Update or add the specific key-value pair

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
};

export const removeKeysFormUrlQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const queryString = qs.parse(params); // Parse the existing query parameters into an object like { query: 'example', page: '2' }

  keysToRemove.forEach((key) => {
    delete queryString[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    { skipNull: true }
  );
};
