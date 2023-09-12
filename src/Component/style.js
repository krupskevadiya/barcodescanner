import {StyleSheet} from 'react-native';
import dimens from '../Utils/dimens';
import colors from '../Utils/colors';
export const styles = StyleSheet.create({
  container: {
    marginTop: dimens.dimen25,
    alignItems: 'center',
  },
  valueContainer: {
    padding: dimens.dimen10,
    marginTop: dimens.dimen8,
    borderColor: colors.gray,
    borderWidth: dimens.dimen1,
    borderRadius: dimens.dimen5,
  },
});
