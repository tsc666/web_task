import React, { Component } from 'react';

export default class SliderDots extends Component {
  constructor(props) {
    super(props);
  }
  
  //将点击dot的i值减去当前的i值，调用turn方法实现跳转
  handleDotClick(i) {
    var option = i - this.props.nowLocal;
    this.props.turn(option);
  }

  render() {
    //定义一个dotNodes数组
    let dotNodes = [];
    let { count, nowLocal } = this.props;
    //使用for循环为每一个dot赋一个i值
    for(let i = 0; i < count; i++) {
      dotNodes[i] = (
        <span
          //为子元素添加一个key
          key={'dot' + i}
          //判断是否为当前图片的i值
          className={"slider-dot" + (i === this.props.nowLocal?" slider-dot-selected":"")}
          //当触发点击事件，调用handleDotClick方法，根据传入的i值实现跳转
          onClick={this.handleDotClick.bind(this, i)}>
        </span>
      );
    }
    return (
      <div className="slider-dots-wrap">
        {dotNodes}
      </div>
    );
  }
}
