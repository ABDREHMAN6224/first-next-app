"use client"
import React, { useMemo } from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: "400px",
  height: "400px",
};

const page = () => {
      const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyB7oGJQRLSuetoFUrBSA_RoWyegJFEY4-s",
      });
   
    const center = useMemo(()=>({ lat: 43, lng: -80 }),[]);
  return (
    <div>
   
      {isLoaded && 
      <GoogleMap
      zoom={10}
      center={center}
      mapContainerStyle={{width:"500px",height:"500px",marginLeft:"30px"}}
      >
           <Marker
            lat={center.lat}
            lng={center.lng}>

            </Marker>
      </GoogleMap>
      }
    </div>
  );
}

export default page