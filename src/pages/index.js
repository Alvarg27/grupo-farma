import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import Clients from "../components/Clients"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" href="images/logo-2.png" />
        <link rel="stylesheet" href="https://use.typekit.net/qtl8vrs.css" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        <title>Grupo Farma</title>
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <About />
      <Clients />
      <Footer />
    </div>
  )
}
