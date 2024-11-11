import { Card } from '../ui/Card';
import { Text, View } from 'react-native';

export const SourceCard = ({ source, url }: { source: string; url: string }) => {
  return (
    <Card>
      <View className="w-full">
        <Text className="bold text-lg font-bold text-gray-200">{source}</Text>
        <Text className="bold text-lg text-gray-500">{url}</Text>
      </View>
    </Card>
  );
};
