// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const SpriteIcon = ({ name, mergeStyles }) => (
  <span className={css(styles.spriteIcon, styles[name], mergeStyles)} />
)

SpriteIcon.propTypes = {
  name: PropTypes.oneOf([
    'squareLogo',
    'friendsLight',
    'friendsDark',
    'messagesLight',
    'messagesDark',
    'notificationsLight',
    'notificationsDark',
  ]),
  mergeStyles: PropTypes.object,
};

export default SpriteIcon;
