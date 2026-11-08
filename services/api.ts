const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiGet<T>(url: string,signal?:AbortSignal): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`,{signal});

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}