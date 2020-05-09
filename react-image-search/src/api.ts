const API_URL = `https://nature-image-api.now.sh/search?q=`;

interface ImageResult {
  image: string;
}

export default async function getImages(searchTerm: string): Promise<string[]> {
  const response = await fetch(`${API_URL}${searchTerm}`);
  const json = await response.json();
  return json.images.map(({ image }: ImageResult) => image);
}