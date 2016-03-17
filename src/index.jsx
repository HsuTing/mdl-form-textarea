'use strict'

import $ from 'jquery';
import React from 'react';

export default class textarea extends React.Component {
  render() {
    let data = this.props.data;
    this.props.getData(data.id, '');
    this.props.getComponents(data.id, this);

    return (
      <div ref="component"
           className={data.className === undefined ? "mdl-textfield mdl-js-textfield" : data.className}
           style={data.style}
      >
        <textarea className="mdl-textfield__input" type="text" rows={data.rows} id={data.id} onChange={this._onChange.bind(this)}></textarea>
        <label className="mdl-textfield__label" htmlFor={data.id}>{data.label}</label>
      </div>
    );
  }

  _onChange(e) {
    let data = this.props.data;
    let val = $(e.target).val();
    if(data.change != undefined) {
      let temp = data.change(val);
      if(temp != undefined) {
        val = temp;
      }
    }   

    if(data.isNotRequire) {
      this.props.getData(data.id, val);
      return;
    }   

    if($(e.target).val == '') {
      $(this.refs.component).addClass('is-invalid');
      this.props.getData(data.id, '');
    }   
    else {
      this.props.getData(data.id, val);
    }   
  }
};
