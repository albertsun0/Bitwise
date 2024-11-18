import { Text, View, Button, ScrollView } from 'react-native';
import { Chip } from '../ui/Chip';
import { styles } from '../ui/styles';
import { RoadMapContext } from 'components/hooks/RoadMapProvider';
import { useContext } from 'react';

export const History = () => {
  const { roadMap, currentNodeId } = useContext(RoadMapContext);

  const testRequest = async () => {
    console.log('test request');
    try {
      // const response = await fetch(`http://10.0.2.2/`);
      const response = await fetch('http://10.0.0.57:8000/');
      const x = await response.json();
      console.log(x);
    } catch (error) {
      console.log('Error fetching content', error);
    }
  };
  return (
    <ScrollView className=" flex h-full flex-col px-8 text-white">
      <Text className="mb-6 mt-32 text-5xl font-bold text-gray-100">History</Text>
      <Button onPress={() => testRequest()} title="Ping"></Button>
      <Text className="text-white">{currentNodeId}</Text>
      <Text className="text-white">{JSON.stringify(roadMap, null, 2)}</Text>
    </ScrollView>
  );
};
