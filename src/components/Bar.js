import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({
	topbutton: {
		width: '100%',
		flex: 1,
		flexDirection: 'row',
		padding: 2,
		paddingBottom: 0,
		backgroundColor: 'white',
		textDecorationColor: 'white'
	},

	button: {
		backgroundColor: 'black',
		borderColor: 'gray',
		borderWidth: 2,
		borderRadius: 4,
		margin: 1
	},

	buttonPress: {
		backgroundColor: 'cornflowerblue',
		borderColor: 'gray',
		borderWidth: 2,
		borderRadius: 4,
		margin: 1
	}
});

class Bar extends React.Component {
	render() {
		return (
			<View style={styles.topbutton}>
				<View style={this.props.counterPressStatus ? styles.buttonPress : styles.button}>
					<Button
						type='solid'
						title='計數器'
						disabled={this.props.counterPressStatus}
						onPress={() => this.props.onPressBarButton()}
						color='white'
					/>
				</View>
				<View style={this.props.picturesPressStatus ? styles.buttonPress : styles.button}>
					<Button
						type='solid'
						title='圖片變換'
						disabled={this.props.picturesPressStatus}
						onPress={() => this.props.onPressBarButton()}
						color='white'
					/>
				</View>
			</View>
		);
	}
}

export default Bar;
