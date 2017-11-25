import React from 'react';
import { View } from "native-base";
import MapView from "react-native-maps";

import styles from "./MapContainerStyles.js";
import SearchBox from "../SearchBox";

export const MapContainer = ({region}) => {

	return (
		<View style = {styles.container}>
			<MapView 
				provider = {MapView.PROVIDER_GOOGLE}
				style = {styles.map}
	              initialRegion={region}
				 >
				<MapView.Marker
					coordinate={region} 
		          	pinColor="red"/>

			</MapView>
			<SearchBox/>

		</View>)
}

export default MapContainer;