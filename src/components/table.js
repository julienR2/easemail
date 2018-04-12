import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Row from './row';
import Column from './column';
import Comment from './comment';

import defaultStyles from '../defaultStyles';

export default class Body extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
  };

  render() {
    const { children, style } = this.props;

    return (
      <table
        style={defaultStyles.table}
        cellSpacing="0"
        cellPadding="0"
        border="0"
        align="center"
        width={(style && style.width) || defaultStyles.table.width}
      >
        <tbody>
          <Row>
            <Column style={style}>
              <Comment
                text={`
                  <!--[if (gte mso 9)|(IE)]>
                    <table cellspacing="0" cellpadding="0" border="0" width="504" align="center">
                      <tr>
                        <td>
                  <![endif]-->
                `}
              />
              <table
                style={{ ...defaultStyles.table, width: style.width, maxWidth: '504px' }}
                cellSpacing="0"
                cellPadding="0"
                border="0"
                align="center"
                width={(style && style.width) || defaultStyles.table.width}
              >
                <tbody>
                  { children }
                </tbody>
              </table>
              <Comment
                text={`
                  <!--[if (gte mso 9)|(IE)]>
              					</td>
              				</tr>
              			</table>
              		<![endif]-->
                `}
              />
            </Column>
          </Row>
        </tbody>
      </table>
    );
  }
}
