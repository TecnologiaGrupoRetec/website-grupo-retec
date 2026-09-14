"use client";

import { useState } from "react";
import QualificationModal from "./qualificationModal";

interface CtaButtonProps {
  className?: string;
}

export default function CtaButton({ className }: CtaButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className={className}
      >
        <span>Falar com um consultor</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      <QualificationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}