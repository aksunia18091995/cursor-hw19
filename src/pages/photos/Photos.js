import React from 'react';
import styles from '../photos/Photos.module.css'
import Masonry from 'react-masonry-css';

import inst1 from '../../images/inst1.jpeg';
import inst2 from '../../images/inst2.jpeg';
import inst3 from '../../images/inst3.jpeg';
import inst4 from '../../images/inst4.jpeg';
import inst5 from '../../images/inst5.jpeg';
import inst6 from '../../images/inst6.jpeg';
import inst7 from '../../images/inst7.jpeg';
import inst8 from '../../images/inst8.jpeg';
import inst9 from '../../images/inst9.jpeg';
import inst10 from '../../images/inst10.jpeg';

const imageList=[inst1, inst2, inst3, inst4, inst5, inst6, inst7, inst8, inst9, inst10]

const Photos = () => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500:1
    }
    return (
        <div className={styles.container}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.myMasonryGrid}
                columnClassName={styles.myMasonryGridColumn}
            >
                {imageList.map((image, index) => (
                    <img key={index} src={image} alt=''/>
                ))}
            </Masonry>
        </div>
    );
};

export default Photos;
