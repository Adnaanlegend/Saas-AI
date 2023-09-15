"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("563012af-4e3b-4c46-96b8-f8d125dff42e");
  }, []);

  return null;
};
