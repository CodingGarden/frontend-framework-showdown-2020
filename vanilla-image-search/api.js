const API_URL = `https://nature-image-api.now.sh/search?q=`;

export default async function getImages(searchTerm) {
  const response = await fetch(`${API_URL}${searchTerm}`);
  const json = await response.json();
  return json.images;
}

// export default function getImages(searchTerm) {
//   return fetch(`${API_URL}${searchTerm}`)
//     .then(response => response.json())
//     .then(json => {
//       return json.images;
//     });
// }