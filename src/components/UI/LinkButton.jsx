"use client";
import Link from "next/link";
import React from "react";

const LinkButton = ({ className = "", children, link = "" }) => {
  return (
    <Link href={link} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
