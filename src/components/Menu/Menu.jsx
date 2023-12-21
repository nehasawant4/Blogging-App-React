import React from "react";
import styles from "./menu.module.css"
import Link from "next/link";
import MenuPosts from "@/components/menuPosts/MenuPosts";
const Menu = () => {
    return(
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>San Francisco</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Neha Sawant</span>
                            <span className={styles.date}> - 18.12.2023</span>
                        </div>
                    </div>
                </Link>

                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.fashion}`}>
                            Fashion
                        </span>
                        <h3 className={styles.postTitle}>Winter Catalogue</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Neha Sawant</span>
                            <span className={styles.date}> - 18.12.2023</span>
                        </div>
                    </div>
                </Link>

                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            Food
                        </span>
                        <h3 className={styles.postTitle}>Hot Chocolate</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Neha Sawant</span>
                            <span className={styles.date}> - 18.12.2023</span>
                        </div>
                    </div>
                </Link>

                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>
                            Culture
                        </span>
                        <h3 className={styles.postTitle}>Christmas</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Neha Sawant</span>
                            <span className={styles.date}> - 18.12.2023</span>
                        </div>
                    </div>
                </Link>
            </div>


            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categoryList}>
                <Link
                    href="/blog?cat=culture"
                    className={`${styles.categoryItem} ${styles.culture}`}>
                    Culture
                </Link>
                <Link
                    href="/blog"
                    className={`${styles.categoryItem} ${styles.fashion}`}>
                    Fashion
                </Link>
                <Link
                    href="/blog"
                    className={`${styles.categoryItem} ${styles.travel}`}>
                    Travel
                </Link>
                <Link
                    href="/blog"
                    className={`${styles.categoryItem} ${styles.food}`}>
                    Food
                </Link>
            </div>


            <MenuPosts></MenuPosts>
        </div>
    )
}

export default Menu