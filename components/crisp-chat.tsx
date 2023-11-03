"use client";
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5e526795-9892-4c7f-9eac-cd30313ddd4e");
  }, []);
  return null;
};
