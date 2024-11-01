import { Text, View, Button, ScrollView } from 'react-native';
import { Chip } from '../ui/Chip';
export const Reader = () => {
  return (
    <ScrollView className="flex flex-col px-8 pt-32 text-white">
      <Text className="mb-6 text-5xl font-bold text-gray-100 ">Heading</Text>

      <View className="mb-12 flex flex-row flex-wrap gap-4">
        <Chip title="Chip 1" />
        <Chip title="Chip 1" />
      </View>

      <Text className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
      </Text>
      <Text className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
      </Text>
      <Text className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
      </Text>
    </ScrollView>
  );
};

const styles = {
  paragraph: 'mb-10 text-2xl text-white text-gray-100',
};
