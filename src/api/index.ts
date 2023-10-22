export const getContentData = async (endpoint?: string, query?: string) => {
  const currentQuery = query ? (`?slug=${query}`) : '';
  const response = await fetch(`${process.env.NEXT_PUBLIC_IDENTITY_CONFIG_BASE_API}/${endpoint}${currentQuery}`);
  if (!response.ok) throw new Error(response.statusText);

  const json = await response.json();
  return json;
};
