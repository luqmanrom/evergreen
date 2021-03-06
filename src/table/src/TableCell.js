import React, { PureComponent } from 'react'
import { Pane } from '../../layers'

export default class TableCell extends PureComponent {
  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes
  }

  static styles = {
    paddingX: 8,
    boxSizing: 'border-box',
    height: 32,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    borderRight: 'extraMuted',
    borderBottom: 'extraMuted',
    overflow: 'hidden'
  }

  render() {
    const { children, ...props } = this.props

    return (
      <Pane {...TableCell.styles} {...props}>
        {children}
      </Pane>
    )
  }
}
