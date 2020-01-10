import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => <SEO title="Home" />
const page = () => {
  return (
    <>
      <IndexPage />
      <Layout />
    </>
  )
}
export default page
