import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { colors } from '../../colors'
import { Text } from '../../typography'

export default class TooltipStateless extends PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  static styles = {
    backgroundColor: colors.neutral['400A'],
    borderRadius: 3,
    paddingX: 8,
    paddingY: 4,
    maxWidth: 240
  }

  render() {
    const { children, ...props } = this.props
    let child
    if (typeof children === 'string') {
      child = (
        <Text display="block" lineHeight="1.25em" color="white" size={400}>
          {children}
        </Text>
      )
    } else {
      child = children
    }
    return (
      <Box {...TooltipStateless.styles} {...props}>
        {child}
      </Box>
    )
  }
}
