import {StyleSheet} from 'react-native';
import colors from './Utils/colors';
import fonts from './Utils/fonts';
import dimens from './Utils/dimens';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: dimens.dimen10,
  },
  initializeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initializeText: {
    fontFamily: fonts.bold,
    fontSize: dimens.dimen14,
    color: colors.gray,
  },
  resultView: {
    flex: 1,
  },
  resultLable: {
    fontFamily: fonts.semiBold,
    color: colors.gray,
    fontSize: dimens.dimen12,
  },
  resultValue: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: dimens.dimen14,
  },
  buttonStyle: {
    backgroundColor: colors.gray,
    padding: dimens.dimen12,
    borderRadius: dimens.dimen8,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: dimens.dimen15,
  },
});
