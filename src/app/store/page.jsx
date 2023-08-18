"use client";
import React, { useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import {FaChevronRight} from "react-icons/fa"
import styles from "./store.module.css";
import SingleProduct from "@/components/SingleProduct";
const Store = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  });

  const center = useMemo(() => ({ lat: 43, lng: -80 }), []);
  console.log(process.env.API_KEY);
  const data = [
    {
      id:1,
      title: "MAISON GOYARD NEW YORK",
      image: "/s1.webp",
      number: "+1 2128130005",
      desc: "20 East 63rd Street, 10065 New York",
      time: "10:00 — 19:00",
    },
    {
      id:2,
      title: "MAISON GOYARD PARIS 66",
      image: "/s2.webp",
      number: "+33 157950666",
      desc: "66, Rue François 1er, 75008 Paris",
      time: "10:00 — 19:00",
    },
    {
      id:3,
      title: "MAISON GOYARD BEVERLY HILLS",
      image: "/s3.webp",
      number: "+1 3102375745",
      desc: "405 North Rodeo Drive, 90210 Beverly Hills",
      time: "10:00 — 19:00",
    },
    {
      id:4,
      title: "MAISON GOYARD NEW YORK",
      image: "/s1.webp",
      number: "+1 2128130005",
      desc: "20 East 63rd Street, 10065 New York",
      time: "10:00 — 19:00",
    },
    {
      id:5,
      title: "MAISON GOYARD PARIS 66",
      image: "/s2.webp",
      number: "+33 157950666",
      desc: "66, Rue François 1er, 75008 Paris",
      time: "10:00 — 19:00",
    },
    {
      id:6,
      title: "MAISON GOYARD BEVERLY HILLS",
      image: "/s3.webp",
      number: "+1 3102375745",
      desc: "405 North Rodeo Drive, 90210 Beverly Hills",
      time: "10:00 — 19:00",
    },
  ];
  return (
    <div className={styles.page}>
      <div className={styles.map}>
        {isLoaded && (
          <GoogleMap
            zoom={10}
            center={center}
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
          >
            <Marker lat={center.lat} lng={center.lng}></Marker>
          </GoogleMap>
        )}
      </div>
      <div className={styles.data}>
        <div className={styles.info}>
          <p>
            Our Counters <FaChevronRight /> Find A Boutique
          </p>
          <h2>
            FIND <br /> A <br />
            BOUTIQUE
          </h2>
          <p>
            Find a boutique by searching for a town or using your current
            location.
          </p>
          <form action="">
            <input type="text" placeholder="Find an Address" />
            <p>use my current location</p>
          </form>
        </div>
        <div className={styles.products}>
          {data.map(d=>{
            return <SingleProduct
            key={d.id}
              title={d.title}
              image={d.image}
              number={d.number}
              desc={d.desc}
              time={d.time}
            />

          })}
        </div>
      </div>
    
    </div>
  );
};

export default Store;
