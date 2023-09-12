import {Text, View} from 'react-native';
import {styles} from './style';
export const TextField = props => {
  return (
    <View>
      <Text style={props.lableStyle}>{props.lable}</Text>
      <View style={styles.valueContainer}>
        <Text style={props.valueStyle}>{props.value}</Text>
      </View>
    </View>
  );
};
