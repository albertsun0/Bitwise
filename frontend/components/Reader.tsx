import { Text, View, Button, ScrollView } from 'react-native';

export const Reader = () => {
  return (
    <ScrollView className="mt-10 flex flex-col space-y-4 text-white">
      <Text className="mb-20 text-7xl font-bold text-white">Heading</Text>
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
  paragraph: 'mb-10 text-2xl text-white ',
};
