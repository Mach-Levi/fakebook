import { StyleSheet } from 'aphrodite';
import {
  primaryColor,
  darkerPrimaryColor,
} from '../../global-styles.js';


const headerHeightPx = '43px';

export default StyleSheet.create({
  headerContainer: {
    position: 'relative',
    height: headerHeightPx,
    minWidth: '100%',
  },
  header: {
    position: 'fixed',
    width: '100%',
    top: '0',
    height: headerHeightPx,
    lineHeight: headerHeightPx,
    backgroundColor: primaryColor,
    borderBottom: `1px solid ${darkerPrimaryColor}`,
    color: '#FFFFFF',
  },
  headerContents: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  headerSearch: {
    flex: '1 1 auto',
  },
  headerNavigation: {
    flex: '0 0 auto',
  },
  headerNavigationChunk: {
    display: 'inline-block',
    height: headerHeightPx,
    padding: '0 9px',
  },
  logo: {
    margin: '7px 5px 7px -2px',
    float: 'left',
  },
  searchInput: {
    position: 'relative',
    top: '9px',
    width: '390px',
    height: '24px',
    padding: '0 5px',
    fontSize: '14px',
    float: 'left',
    border: 'none',
    borderRadius: '3px',
    outline: 'none',
  },
});
