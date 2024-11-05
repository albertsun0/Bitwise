import { Text, View, Button } from 'react-native';
import { Reader } from './Reader';
import { styles } from '../ui/styles';
export const MainContent = ({ path }: { path: string }) => {
  return (
    <View className="">
      <Reader />
    </View>
  );
};
