import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keyword} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to DeliverX",
  description: "we sell quality, cheap products in all categories",
  keyword: "buy, cheap, quality products, electrnoics, laptops, smartphones",
};

export default Meta;
