import { Button } from 'components/ui/Button';
import { View } from 'react-native';
import { RoadMapContext } from 'components/hooks/RoadMapProvider';
import { useContext } from 'react';

export const Settings = () => {
  const { resetAll } = useContext(RoadMapContext);
  return (
    <View className="flex flex-col px-8 pt-32">
      <Button onPress={() => resetAll()} text="Reset"></Button>
    </View>
  );
};
