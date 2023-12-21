import React from "react";
import styles from "./card.module.css"
import Image from "next/image";
import Link from "next/link";
const Card = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Carrot Pudding</h1>
                </Link>
                <p className={styles.desc}>This Halwa can be made with any kind of carrot, but the best Gajar ka Halwa is made with deep red, juicy and sweet winter carrots.
                    Making Gajar ka Halwa was an annual end-of-the-year affair for me when winter carrots were in season.
                    These carrots grow in the cooler climates of Northern India December, January and February.
                    They are juicier and very sweet so halwa made from them is more carrot and less sugar.
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card