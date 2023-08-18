"use client"
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Map = ({center,data}) => {
  return (
    <div>
        <GoogleMap
            zoom={10}
            center={center}
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
          >
            {data.map(d=>{
              <Marker key={d.id} lat={d.lat} lng={d.lng}></Marker>
            })}
        </GoogleMap>
    </div>
  )
}

export default Map