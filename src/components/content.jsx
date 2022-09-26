import React from 'react';

import * as styles from './content.module.css';

const Content = ({children}) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    );
}

export default Content;
