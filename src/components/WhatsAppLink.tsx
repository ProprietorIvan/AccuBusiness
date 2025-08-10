"use client";
import { FC, MouseEvent, ReactNode } from "react";

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
}

const WhatsAppLink: FC<WhatsAppLinkProps> = ({ children, className }) => {
  const WHATSAPP_LINK =
    "https://wa.me/18009896507?text=I am reaching out from the Accubusiness website about accounting services.";

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      await fetch("/api/whatsapp", {
        method: "POST",
        keepalive: true,
      });
    } catch (error) {
      console.error("Failed to send WhatsApp notification", error);
    } finally {
      window.open(WHATSAPP_LINK, "_blank");
    }
  };

  return (
    <a href={WHATSAPP_LINK} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default WhatsAppLink;
