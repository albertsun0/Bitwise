import { Text, View, Button, ScrollView } from 'react-native';
import { Chip } from '../ui/Chip';
import { styles } from '../ui/styles';
export const History = () => {
  return (
    <ScrollView className="mt-32 flex h-full flex-col px-8 text-white">
      <Text className="mb-6 text-5xl font-bold text-gray-100 ">History</Text>
      {/* 
      <View className="mb-12 flex flex-row flex-wrap gap-4">
        <Chip title="Chip 1" />
        <Chip title="Chip 1" />
      </View> */}
    </ScrollView>
  );
};
