import { StyleSheet } from 'react-native';

import { Colors } from '@/theme/colors';

const globalStyles = StyleSheet.create({
  shadow: {
    elevation: 8,
    shadowColor: Colors.additionalDark,
    shadowOffset: { height: -2, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
});

export default globalStyles;
