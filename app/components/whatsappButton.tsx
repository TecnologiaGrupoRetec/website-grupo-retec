"use client";

import React from "react";
import Image from "next/image";
import styles from "./styles/whatsapp-button.module.scss";

export default function WhatsappButton() {
    return (
        <a
            href="https://wa.me/5561998904494"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappFloat}
            aria-label="Falar no WhatsApp"
            title="Falar no WhatsApp"
        >
            <span className={styles.whatsappTooltip}>Falar com um consultor</span>
            <div className={styles.whatsappIconWrapper}>
                <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp Grupo RETEC"
                    width={48}
                    height={48}
                    unoptimized
                />
            </div>
        </a>
    );
}
