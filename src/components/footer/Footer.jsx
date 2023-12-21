import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="Neha Blog" width={50} height={50}/>
                    <h1 className={styles.logoText}>NehaBlog</h1>
                </div>
                <p className={styles.desc}>
                    I hope you liked my articles.
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="" width={18} height={18}/>
                    <Image src="/instagram.png" alt="" width={18} height={18}/>
                    <Image src="/youtube.png" alt="" width={18} height={18}/>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitles}>Tags</span>
                    <Link href="/">Travel</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Food</Link>
                    <Link href="/">Culture</Link>
                </div>

                <div className={styles.list}>
                    <span className={styles.listTitles}>Social </span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Youtube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer