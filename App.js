import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Bar from './src/components/Bar';
import Counter from './src/components/Counter';
import Pictures from './src/components/Pictures';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	body: {
		backgroundColor: 'azure',
		flexDirection: 'column',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counterPressStatus: true, picturesPressStatus: false, counter: 0 };
		this.onPressBarButton = this.onPressBarButton.bind(this);
		this.onPressAddOne = this.onPressAddOne.bind(this);
		this.onPressReset = this.onPressReset.bind(this);
	}

	onPressBarButton() {
		this.setState({ counterPressStatus: !this.state.counterPressStatus });
		this.setState({ picturesPressStatus: !this.state.picturesPressStatus });
	}

	onPressAddOne = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	onPressReset = () => {
		this.setState({ counter: 0 });
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Bar
					counterPressStatus={this.state.counterPressStatus}
					picturesPressStatus={this.state.picturesPressStatus}
					onPressBarButton={this.onPressBarButton}
				/>
				<Counter
					isHide={!this.state.counterPressStatus}
					onPressAddOne={this.onPressAddOne}
					onPressReset={this.onPressReset}
					counter={this.state.counter}
					styles={styles.body}
				/>
				<Pictures isHide={!this.state.picturesPressStatus} bodyStyle={styles.body} />
			</SafeAreaView>
		);
	}
}

const App = () => {
	return <Container />;
};

export default App;
