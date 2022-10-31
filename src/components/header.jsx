import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import { PageHeader, Input, Tag } from 'antd';

import * as styles from './header.module.css';

const { Search } = Input;
const Header = ({ siteTitle }) => {

  const onSearch = (value) => console.log(value);

  const extraDom = (
    <Search placeholder="输入搜索内容查找" onSearch={onSearch} enterButton />
  );
  return (
    // <header
    //   style={{
    //     margin: `0 auto`,
    //     padding: `var(--space-4) var(--size-gutter)`,
    //     display: `flex`,
    //     alignItems: `center`,
    //     justifyContent: `space-between`,
    //   }}
    // >
    //   <Link
    //     to="/"
    //     style={{
    //       fontSize: `var(--font-sm)`,
    //       textDecoration: `none`,
    //     }}
    //   >
    //     {siteTitle}
    //   </Link>
    // </header>
    <PageHeader
      className={styles.siteHeader}
      onBack={false}
      extra={extraDom}
      title={siteTitle}
      tags={<Tag color="blue">网站建设中...</Tag>}
      subTitle="记录 学习 交流 奋进"
      avatar={{src: "https://avatars.githubusercontent.com/u/22462214?s=40&amp;v=4"}}
    />
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
