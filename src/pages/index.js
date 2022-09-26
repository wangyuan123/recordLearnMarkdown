import React from "react"
import { Image } from 'antd';

import Layout from "../components/layout"

const Home = () => (
  <Layout>
    <Image.PreviewGroup>
    <Image
      width={"100%"}
      src="https://backiee.com/static/wpdb/wallpapers/v2/1000x563/341510.jpg"
    />
  </Image.PreviewGroup>
  </Layout>
)
export default Home;