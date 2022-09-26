/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Content from "./content"
import "./layout.css"

const dataEnum = {
  webTitle: '个人文档记录学习',
};
const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle={dataEnum.webTitle} />
      <Content>{children}</Content>
      <Footer siteTitle={dataEnum.webTitle} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
