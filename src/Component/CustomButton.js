import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
export const CustomButton = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onButtonClick()}
      style={styles.container}>
      <View style={props.buttonStyle}>
        <Text style={props.buttonTextStyle}>{props.buttonLable}</Text>
      </View>
    </TouchableOpacity>
  );
};
