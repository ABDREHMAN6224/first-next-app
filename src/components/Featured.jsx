"use client"
import React from 'react'
import styles from "./featured.module.css"
import {Newsreader} from "next/font/google"
import Product from './Product'
const newspaper=Newsreader({
    subsets:['latin'],
    weight:['300']
})
const data = [
  {
    image: "b1.webp",
    title: "Rouette Structuré Mini Bag",
  },
  {
    image: "b2.webp",
    title: "Rouette Structuré Mini Bag",
  },
  {
    image: "b2.webp",
    title: "Rouette Structuré Mini Bag",
  },
];
const Featured = ({title="what's new",products=data}) => {
  return (
    <div className={styles.container}>
      <h3 className={`${newspaper.className} ${styles.title}`}>{title}</h3>
      <div className={styles.products_container}>
        {products.map(d=>{
          return <Product image={d.image} title={d.title} />
        })}
      </div>
    </div>
  );
}

export default Featured