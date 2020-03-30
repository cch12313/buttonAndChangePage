import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
	buttons: {
		borderWidth: 1,
		width: '30%',
		borderColor: 'black',
		borderRadius: 3,
		minWidth: 100,
		margin: 2
	}
});

class Counter extends React.Component {
	render() {
		if (this.props.isHide) {
			return null;
		} else {
			return (
				<View style={this.props.styles}>
					<View
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							marginBottom: 5
						}}
					>
						<Text style={{ fontSize: 25, fontStyle: 'italic' }}>計數器： {this.props.counter}</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<View style={styles.buttons}>
							<Button title='+1' onPress={() => this.props.onPressAddOne()} />
						</View>
						<View style={styles.buttons}>
							<Button title='reset' onPress={() => this.props.onPressReset()} />
						</View>
					</View>
				</View>
			);
		}
	}
}

export default Counter;
