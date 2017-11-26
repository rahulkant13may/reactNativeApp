import React from 'react';
import { View } from "native-base";
import MapView from "react-native-maps";

import styles from "./MapContainerStyles.js";
import SearchBox from "../SearchBox";
import SearchResults from "../SearchResults";

export const MapContainer = ({region, getInputData}) => {

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
			<SearchBox getInputData={getInputData}/>
			<SearchResults/>

		</View>)
}

export default MapContainer;