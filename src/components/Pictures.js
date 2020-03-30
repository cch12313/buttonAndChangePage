import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	pic: {
		flex: 1,
		maxHeight: height,
		maxWidth: width,
		resizeMode: 'contain'
	}
});

const src = '../config/image/';
const pictureConfig = {
	react: {
		name: 'react',
		type: '.png'
	},
	react_native: {
		name: 'react_native',
		type: '.png'
	},
	javaScript: {
		name: 'javaScript',
		type: '.png'
	}
};

const getPicture = ({ name, type }) => {
	const path = src + name + type;
	console.log(path);
	return path;
};

const Pictures = ({ bodyStyle, isHide }) => {
	if (isHide) {
		return null;
	} else {
		return (
			<View style={bodyStyle}>
				<TouchableOpacity style={styles.pic}>
					<Image source={require('../config/image/react_native.png')} style={styles.pic} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.pic}>
					<Image source={require('../config/image/react.png')} style={styles.pic} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.pic}>
					<Image source={require('../config/image/javaScript.png')} style={styles.pic} />
				</TouchableOpacity>
			</View>
		);
	}
};

export default Pictures;
