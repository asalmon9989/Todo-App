import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

/**
 * @param props
 *  - style: style for container
 *  - selectedColor: inner circle color
 *  - radius: outer circle radius
 *  - borderColor: outer circle color
 *  - selected: radio button is selected?
 *  - onPress: callback when button is pressed
 *  - innerCircleStyle: Style override for inner circle
 *  - outerCircleStyle: Style override for outer circle
 */
class RadioButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selected: this.props.selected };
  }

  toggleButton() {
    this.setState({ selected: !this.state.selected });
    this.props.onPress();
  }

  renderInnerCircle(innerStyle, innerCircleStyle) {
    if (this.state.selected) {
      return (
        <View style={[innerStyle, innerCircleStyle]}></View>
      );
    }
    return;
  }

  render() {
    const { selectedColor, radius, borderColor, outerCircleStyle, innerCircleStyle } = this.props;
    const { outerView, innerView } = styles(selectedColor, radius, borderColor);

    return (
      <TouchableOpacity onPress={this.toggleButton.bind(this)} style={this.props.style}>
        <View style={[outerView, outerCircleStyle]}>
          {this.renderInnerCircle(innerView, innerCircleStyle)}
        </View>
      </TouchableOpacity>
    );
  }
};


RadioButton.propTypes = {
  selectedColor: PropTypes.string,
  radius: PropTypes.number,
  borderColor: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  innerCircleStyle: PropTypes.object,
  outerCircleStyle: PropTypes.object
};
RadioButton.defaultProps = {
  selectedColor: 'black',
  radius: 10,
  borderColor: 'black',
  selected: true,
  onPress: () => {},
  innerCircleStyle: {},
  outerCircleStyle: {}
};

const styles = (selectedColor, radius, borderColor) => {
  return StyleSheet.create({
    outerView: {
      borderRadius: radius,
      width: (radius*2),
      height: (radius*2),
      borderWidth: 2,
      borderColor: borderColor,
      alignItems: 'center',
      justifyContent: 'center'
    },
    innerView: {
      borderWidth: ((radius-2) * .8), //80% of the inner space
      borderRadius: ((radius-2) * .8),
      borderColor: selectedColor
    }
  });

}

export default RadioButton;
