import { Text, View, ScrollView } from 'react-native';
import { Reader } from './Reader';

import { RoadMapContext } from 'components/hooks/RoadMapProvider';
import { useEffect, useState, useContext } from 'react';
import { Button } from 'components/ui/Button';

export const MainContent = ({ path }: { path: string }) => {
  const { roadMap, currentNodeId, loading, setNode, getNextNode, addChildrenNodes } =
    useContext(RoadMapContext);

  const currentNode = roadMap?.nodes[currentNodeId];
  console.log('RENDER', currentNode);
  if (!currentNode || !currentNode.content || loading) {
    return (
      <View className="flex h-screen w-screen flex-col items-center justify-center">
        <Text className="text-white">Loading</Text>
      </View>
    );
  }
  return (
    <View className="px-8">
      <ScrollView className="flex flex-col text-white">
        <Reader title={currentNode.content.title} text={currentNode.content.content} />
        <View className="flex flex-col gap-4">
          <Button onPress={() => getNextNode()} text="Next"></Button>
          <Text className="text-lg font-bold text-white">Dive Deeper</Text>
          {currentNode.content.related &&
            currentNode.content.related.map((topic: string, index: number) => (
              <View key={index}>
                <Button onPress={() => addChildrenNodes([topic])} text={topic}></Button>
              </View>
            ))}
          {/* <Button onPress={() => addChildrenNodes(['a', 'b', 'c'])} text="Add Children"></Button> */}
          <View className="h-16" />
        </View>
      </ScrollView>
    </View>
  );
};
