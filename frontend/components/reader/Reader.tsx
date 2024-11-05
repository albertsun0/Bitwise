import { Text, View, Button, ScrollView } from 'react-native';
import { Chip } from '../ui/Chip';
import { Card } from '../ui/Card';
export const Reader = () => {
  return (
    <ScrollView className="flex flex-col px-8 text-white">
      <View className="py-32">
        <Text className="mb-6 text-5xl font-bold text-gray-100 ">Heading</Text>

        <View className="mb-12 flex flex-row flex-wrap gap-4">
          <Chip title="Chip 1" />
          <Chip title="Chip 1" />
        </View>

        <Text className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
        <Text className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
        <Text className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
        {/* <Text className="h-32">hhihihii</Text> */}
        <Card>
          <View className="w-full">
            <Text className="bold text-lg font-bold text-gray-200">Source</Text>
            <Text className="bold text-lg text-gray-500">url</Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = {
  paragraph: 'mb-10 text-2xl text-white text-gray-200',
};
