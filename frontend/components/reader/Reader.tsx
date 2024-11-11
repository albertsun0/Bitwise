import { Text, View, Button, ScrollView } from 'react-native';
import { Chip } from '../ui/Chip';
import { Card } from '../ui/Card';
import Markdown from 'react-native-markdown-display';

type ReaderProps = {
  title: string;
  text: string;
  tags?: string[];
};

export const Reader = ({ title, text, tags }: ReaderProps) => {
  return (
    <ScrollView className="flex flex-col text-white">
      <View className="py-32">
        <Text className="mb-6 text-5xl font-bold text-gray-100 ">{title}</Text>

        <View className="mb-12 flex flex-row flex-wrap gap-4">
          <Chip title="Chip 1" />
          <Chip title="Chip 1" />
        </View>
        <Markdown style={MarkdownStyles}>{text}</Markdown>
      </View>
    </ScrollView>
  );
};

const MarkdownStyles = {
  body: { color: 'white', fontSize: 20 },
};

const styles = {
  paragraph: 'mb-10 text-2xl text-white text-gray-200',
};
