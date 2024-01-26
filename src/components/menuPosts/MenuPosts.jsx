import React from "react";
import styles from "./menuPosts.module.css"
import Link from "next/link";
import Image from "next/image";

const MenuPosts = () => {
    return(
        <div>
            <h2 className={styles.subtitle}>Chosen by the editor"</h2>
            <h1 className={styles.title}>Editor's Pick</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.png" alt="" fill className={styles.image}/>
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>17 Fun Things to do in Italy</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Neha Sawant</span>
                            <span className={styles.date}> - 18.12.2023</span>
                        </div>
                    </div>
                </Link>

                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.png" alt="" fill className={styles.image}/>
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>
                            Fashion
                        </span>
                        <h3 className={styles.postTitle}>Would You Match Outfits With Your Significant Other?</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Neha Sawant</span>
                            <span className={styles.date}> - 18.12.2023</span>
                        </div>
                    </div>
                </Link>

                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.png" alt="" fill className={styles.image}/>
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            Food
                        </span>
                        <h3 className={styles.postTitle}>Gulab Jam</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Neha Sawant</span>
                            <span className={styles.date}> - 18.12.2023</span>
                        </div>
                    </div>
                </Link>

                <Link href="/" className={styles.item}>
                    <div className={styles.imageContainer}>
                        <Image src="/p1.png" alt="" fill className={styles.image}/>
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>
                            Culture
                        </span>
                        <h3 className={styles.postTitle}>Gulab Jam</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Neha Sawant</span>
                            <span className={styles.date}> - 18.12.2023</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default MenuPosts;