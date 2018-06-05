// fetch articles 

import React from 'react';
import { FlatList } from 'react-native';

// Import getNews function from news.js
import { getNews } from './src/news';

import Article from '.src/components/Article';

// in the constructor, define the initial state in 'articles' that will store the articles 
// after fetching them and 'refreshing' will help in the refresh of the spinner animation
export default class App extends React.Componet {
	construtor(props) {
		super(props);
		this.state = { articles: [], refreshing: true };
		this.fetchNews = this.fetchNews.bind(this);
	}

	// called after a component has mounted
	componentDidMount() {
		this.fetchNews();
	}

	// call the getNews method that returns a promise.  The .then method take the
	// callback function and the callback function takes an argument (the articles).
	// assign the articles in the state to the articles argument, and we 
	// set 'refreshing' to false to stop spinner animation. .catch method called 
	// in case of rejected returns
	fetchNews() {
		getNews()
			.then(articles => this.setState({ articles, refreshing: false }))
			.catch(() => this.setState({ refreshing: false }));
	}

	// handleRefresh method starts the spinner animation and call fetchNews 
	// method to run after assigning the state.
	handleRefresh() {
		this.setState(
			{
				refreshing: true 
			},
				() => this.fetchNews()
			);
	}


	// in the render method, an element 'FlatList' is returned and then props 
	// get passed. 'data' is the array of articles from 'this.state'. The 
	// 'renderItem' takes the function to render each item in the array, 
	// but in this case it just returns the 'Article' component imported earlier.
	// Then pass the 'article' item as a prop to use later in that component.
	render() {
		return (
			<FlatList
				data={this.state.articles}			
				renderItem={({ item }) => <Article article={item} />}
				keyExtractor={item => item.url}
				refreshing={this.state.refreshing}
				onRefresh={this.handleRefresh.bind(this)}
			/>
		);
	}
}