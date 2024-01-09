"use client"

import { Achivements } from "@/components/Achivements/Achivements"
import { Contact } from "@/components/Contact/Contact"
import HomePage from "@/components/Home/Home"
import { Needs } from "@/components/Needs/Needs"
import { Works } from "@/components/Works/Works"


export default function Home() {
  return (
    <main>
      <HomePage />
      <Works />
      <Needs />
      <Achivements />
      <Contact/>
    </main>
  )
}