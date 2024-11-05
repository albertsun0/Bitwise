import { Text, View } from 'react-native';
import { styles } from './styles';

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className={`flex flex-row items-center justify-center gap-2 px-6 py-4 ${styles.border}`}>
      {children}
    </View>
  );
};
