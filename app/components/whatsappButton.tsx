"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles/whatsapp-button.module.scss";
import QualificationModal from "./qualificationModal";

export default function WhatsappButton() {
    const [modalOpen, setModalOpen] = useState(false); 

    return (
        <>
            {}
            <button
                type="button"
                onClick={() => setModalOpen(true)}
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
            </button>

            {}
            <QualificationModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
}