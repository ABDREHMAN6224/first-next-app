"use client"
import React, { useState,useEffect } from 'react'
import styles from "./testimonial.module.css"
import { Newsreader } from 'next/font/google';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from 'next/image';
const reader=Newsreader({
  subsets:["latin"],
  weight:"300",
  display:"swap"
})
const Testimonial = () => {
  const slides = [
    {
      id:1,
      image: "/s1.webp",
      title: "Maison Goyard Biarritz",
      desc: "4 Avenue de l'Impératrice, 64200  Biarritz",
    },
    {
      id:2,
      image: "/s2.webp",
      title: "Maison Goyard Biarritz",
      desc: "4 Avenue de l'Impératrice, 64200  Biarritz",
    },
    {
      id:3,
      image: "/s3.webp",
      title: "Maison Goyard Biarritz",
      desc: "4 Avenue de l'Impératrice, 64200  Biarritz",
    },
    {
      id:4,
      image: "/s1.webp",
      title: "Maison Goyard Biarritz",
      desc: "4 Avenue de l'Impératrice, 64200  Biarritz",
    },
    {
      id:5,
      image: "/s2.webp",
      title: "Maison Goyard Biarritz",
      desc: "4 Avenue de l'Impératrice, 64200  Biarritz",
    },
    {
      id:6,
      image: "/s3.webp",
      title: "Maison Goyard Biarritz",
      desc: "4 Avenue de l'Impératrice, 64200  Biarritz",
    },
  ];
      const [people, setPeople] = useState(slides);
      const [current, setCurrent] = useState(0);
      useEffect(() => {
        let id = setInterval(() => {
          nextSlide();
        }, 5000);
        return () => {
          clearInterval(id);
        };
      }, [current]);

      const prevSlide = () => {
        const i = current ? current - 1 : people.length - 1;
        setCurrent(i);
      };
      const nextSlide = () => {
        setCurrent((current + 1) % people.length);
      };
  return (
    <div className={styles.page}>
      <h2 className={reader.className}>OUR BOUTIQUES</h2>
      <section className={styles.slider_container}>
        {people.map((p, index) => {
          const { id, image, title, desc } = p;
          return (
            <article
              className={styles.slide}
              style={{
                transform: `translateX(${100 * (index - current)}%)`,
                opacity: index === current ? "1" : "0",
                visibility: index === current ? "visible" : "hidden",
              }}
              key={id}
            >
              <Image src={image} alt={title} width={350} height={320} />
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.text}>{desc}</p>
            </article>
          );
        })}
        <button type="button" className={styles.prev} onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button type="button" className={styles.next} onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </section>
      <h2 className={`${reader.className} ${styles.head}`}>All OUR BOUTIQUES</h2>
    </div>
  );
}

export default Testimonial