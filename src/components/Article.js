import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

export default class Article extends React.Component {
	render() {
		const {
			title,
			description,
			publishedAt,
			source,
			urlToImage,
			url
		} = this.props.articles;
		const { noteStlye, featuredTitleStyle } = styles;
		const time = moment(publishedAt || moment.now()).fromNow();
		const deafultImg = 'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';

		return (
			<TouchableNativeFeedback
			useForeground
			onPress={() => Linking.openURL(url)}
			>
				<Card
				featuredTitle={title}
				featuredTitleStyle={featuredTitleStyle}
				image={{
					uri: urlToImage || defaultImg
				}}
				>
					<Text style={{ marginBottom: 10 }}>
						{description || 'Read more...'}
					</Text>
						<Divider style={{ backgroundColor: '#dfe6e9' }} />
						<View stlye={{ flexDirection: 'row', justifyContent: 'space-between' }} 
						>
							<Text style={noteStlye}>{source.name.toUpperCase()}</Text>
							<Text style={noteStlye}>{time}</Text>
						</View>
				</Card>
			</TouchableNativeFeedback>
		);
	}
}

const styles = {
	noteStlye: {
		margin: 5,
		fontStyle: 'italic',
		color: '#b2bec3',
		fontSize: 10
	},
	featuredTitleStyle: {
		marginHorizontal: 5,
		textShadowColor: '#00000f',
		textShadowOffset: { width: 3, height: 3 },
		textShadowRadius: 3
	}
};