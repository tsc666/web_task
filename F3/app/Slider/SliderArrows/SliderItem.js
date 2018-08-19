import React, { Component } from 'react';

export default class SliderArrows extends Component {
  constructor(props) {
    super(props);
  }
  
  //接收箭头点击时传递的参数，调用turn方法进行跳转
  handleArrowClick(option) {
    this.props.turn(option);
  }

  render() {
    return (
      <div className="slider-arrows-wrap">
        <span
          //向右跳转的箭头
          className="slider-arrow slider-arrow-right"
          //向handleArrowClick函数传递参数，条用turn方法使图片向前一张
          onClick={this.handleArrowClick.bind(this, 1)}>
          →
        </span>
        <span
          //向左跳转的箭头
          className="slider-arrow slider-arrow-left"
          //向handleArrowClick函数传递参数，条用turn方法使图片向后一张
          onClick={this.handleArrowClick.bind(this, -1)}>
          ←
        </span>

      </div>
    );
  }
}