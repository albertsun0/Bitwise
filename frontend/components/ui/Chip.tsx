import { Text, View } from 'react-native';
import { styles } from './styles';
export const Chip = ({ title }: { title: string }) => {
  return (
    <View className={`flex flex-row items-center justify-center gap-2 px-4 py-1 ${styles.border}`}>
      <View className="h-3 w-3 rounded-full bg-[#363433]"></View>
      <Text className="text-white">{title}</Text>
    </View>
  );
};
