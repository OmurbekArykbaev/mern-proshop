import React from "react"
import { Helmet } from "react-helmet"

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Добро пожаловать в Магазин вещей!",
  description: "We sell the best products for cheap",
  keywords: "electronics, buy electronics",
}

export default Meta
