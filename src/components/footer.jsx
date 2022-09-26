import React from 'react';

import * as styles from './content.module.css';

const Footer = () => {
    console.log('styles', styles)
    return (
        <div
        className={styles.footer}
        >
           汪渊的个人笔记文档 | created by @Gatsby
        </div>
    );
}
export default Footer;
