import { Text, View, Button } from 'react-native';
import { Reader } from './Reader';
export const EditScreenInfo = ({ path }: { path: string }) => {
  return (
    <View>
      <Reader />
      <View className="absolute bottom-0 w-full px-4">
        <View
          className="flex-row items-center 
        rounded-md border border-gray-900 bg-black p-4 text-2xl">
          <Text className="text-2xl text-white">Next</Text>
        </View>
      </View>
    </View>
  );
};
