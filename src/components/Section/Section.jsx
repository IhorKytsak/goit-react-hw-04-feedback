import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Title, SectionContainer } from './Section.styled';

class Section extends Component {
  render() {
    return (
      <SectionContainer>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </SectionContainer>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
