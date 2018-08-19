import React from 'react'
import {render} from 'react-dom';
import Slider from './Slider/Slider';
const IMAGE_DATA = [
  {
    src: require('./components/01.png'),
    alt: 'images-1',
  },
  {
    src: require('./components/02.png'),
    alt: 'images-2',
  },
  {
    src: require('./components/03.png'),
    alt: 'images-3',
  },
  {
    src: require('./components/04.png'),
    alt: 'images-4',
  },
];

render(
	<Slider
	    //items数组，存放轮播图的内容
        items={IMAGE_DATA}
        //是否自动播放
        autoplay={true}
        //图片切换时候的速度
        speed={1.2}
        //每张图片停留的时间
        delay={2.1}
        //当鼠标悬停时是否暂停播放
        pause={true}
        //轮播图下面的小点
        dots={true}
        //轮播图的箭头
        arrows={true}
    />,
      document.getElementById('root')
	);  