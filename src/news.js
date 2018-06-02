// fetch headlines from NewsAPI.org and return in JSON

const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=Your_API_KEY";

export async function getNews() {
	let result = await fetch(url).then(response => response.json());
	return result.articles;
}