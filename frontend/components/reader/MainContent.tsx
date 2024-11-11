import { Text, View } from 'react-native';
import { Reader } from './Reader';

import { RoadMapContext } from 'components/hooks/RoadMapProvider';
import { useEffect, useState, useContext } from 'react';
import { Button } from 'components/ui/Button';
// Get current Node, make call to backend, on response set data in localstorage
// get and display data
export const MainContent = ({ path }: { path: string }) => {
  const { roadMap, currentNodeId, loading, setNode, getNextNode, addChildrenNodes } =
    useContext(RoadMapContext);

  const currentNode = roadMap?.nodes[currentNodeId];
  console.log('RENDER', currentNode);
  if (!currentNode || !currentNode.content || loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View className="px-8">
      <Reader title={currentNode.content.title} text={currentNode.content.content} />
      <Button onPress={() => getNextNode()} text="Next"></Button>
      <Button onPress={() => addChildrenNodes(['a', 'b', 'c'])} text="Add Children"></Button>
    </View>
  );
};
