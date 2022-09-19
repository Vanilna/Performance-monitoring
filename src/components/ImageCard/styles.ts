import { StyleSheet } from 'react-native';

import { Colors } from '@/theme/colors';
import globalStyles from '@/theme/styles';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: Colors.additionalLight,
    borderRadius: 8,
    ...globalStyles.shadow,
  },
  image: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    width: '100%',
    height: 100,
  },
  dataContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dataHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  userName: {
    color: Colors.accent,
    fontWeight: 'bold',
    fontSize: 16,
  },
  userAvatar: {
    borderRadius: 50,
    borderColor: Colors.accent,
    borderWidth: 3,
    borderStyle: 'solid',
    width: 40,
    height: 40,
    marginRight: 8,
  },
  counter: {
    alignSelf: 'flex-end',
  },
  counterText: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.dark,
  },
  tags: {
    fontSize: 12,
    color: Colors.additionalDark,
    marginTop: 4,
  },
});

export const getImageBorder = (tags: string) => {
  switch (true) {
    case tags.includes('flowers'):
    case tags.includes('flower'):
      return {
        borderColor: 'pink',
        borderBottomWidth: 5,
      };
    case tags.includes('landscape'):
    case tags.includes('mountains'):
    case tags.includes('nature wallpaper'):
      return {
        borderColor: 'green',
        borderBottomWidth: 5,
      };
    default:
      return {};
  }
};

export default styles;
