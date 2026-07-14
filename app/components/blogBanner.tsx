import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../components/styles/blogBanner.module.scss";

export default function BlogBanner() {
    return (
        <div className={styles.bannerWrapper}>
            {/* Alterar o link depois */}
            <Link
                href="https://wa.me/5561991311283?text=Ol%C3%A1%2C%20vi%20o%20banner%20no%20blog%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    //Link do banner, para futuras modificações
                    src="/blog/banner-hvac-retec.png"
                    alt="Campanha RETEC"
                    width={800}
                    height={320}
                    className={styles.bannerImage}
                    priority
                />
            </Link>
        </div>
    );
}
