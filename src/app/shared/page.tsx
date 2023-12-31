'use client';
import React, { useEffect } from 'react';
import AOS from 'aos'; // Assuming type definitions are available

export function Aos() { // Named export for clarity
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize options as needed
    });
  }, []);

  return <></>;
}