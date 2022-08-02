import { StyleSheet } from 'react-native';

import { Colors } from '@/theme/colors';
import globalStyles from '@/theme/styles';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: Colors.additionalLight,
    borderRadius: 8,
    ...globalStyles.shadow,
  },
  image: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    width: '100%',
    height: 250,
  },
  dataContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
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
  likes: {
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

export default styles;
