import React, { Component }  from 'react';
export const setStar = (number) => {
    let imgArr = [];
    for(let i=0; i< Math.floor(number); i++) {
        let img = <img className = 'd-inline smallStar' src="./img/Films/star1.png"/>
        imgArr = [...imgArr, img];
    }
    if (Math.floor(number) < number) {
        let img = <img className = 'd-inline smallStar' src="./img/Films/star1.2.png"/>
        imgArr = [...imgArr, img];
    }
    return imgArr;
}