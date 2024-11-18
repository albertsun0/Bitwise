import React, { createContext, useEffect, useState } from 'react';
import { RoadMapNode, RoadMap } from './localstorage';
import {
  getRoadMap,
  CURRENT_NODE_KEY,
  getElement,
  storeRoadMap,
  storeElement,
  resetLocalStorage,
} from './localstorage';
import _ from 'lodash';
import uuid from 'react-native-uuid';

type RoadMapContextType = {
  roadMap: RoadMap | null;
  currentNodeId: string;
  loading: boolean;
  setNode: (value: RoadMapNode) => void;
  fetchData: () => void;
  getNextNode: () => void;
  addChildrenNodes: (nodes: string[]) => void;
};

export const RoadMapContext = createContext<RoadMapContextType | null>(null);
null;

export const RoadMapProvider = ({ children }: { children: React.ReactNode }) => {
  const [roadMap, setRoadMap] = useState<RoadMap | null>(null);
  const [currentNodeId, setCurrentNodeId] = useState<string>('0');
  const [loading, setLoading] = useState(true);

  const updateFromStorage = async () => {
    setLoading(true);
    const roadMap = await getRoadMap();
    setRoadMap(roadMap);

    const currentNodeId = (await getElement(CURRENT_NODE_KEY)) || '0';
    setCurrentNodeId(currentNodeId || '0');
    setLoading(false);
  };

  useEffect(() => {
    console.log('use  effect');
    updateFromStorage();
  }, []);

  const setNode = async (value: RoadMapNode) => {
    if (!roadMap) return;
    const newRoadMap = _.cloneDeep(roadMap);
    newRoadMap.nodes[currentNodeId] = value;
    setRoadMap(newRoadMap);
    await storeRoadMap(newRoadMap);
  };

  const fetchData = async () => {
    console.log('fetch data');
    setLoading(true);
    const currentNode = roadMap?.nodes[currentNodeId];
    console.log('UPDATED NODE:', currentNode);
    if (!currentNode) {
      console.log('No node');
      return;
    }
    console.log(currentNode.content);
    if (!currentNode.content) {
      // fetch content
      console.log('fetching content');
      try {
        const response = await fetch(`http://10.0.0.57:8000/generate/${currentNode.title}`);
        console.log(response);
        const x = await response.json();

        currentNode.content = {
          title: x.article_title,
          content: x.article_body,
          related: x.related_topics,
        };

        setNode(currentNode);
      } catch (error) {
        console.log('Error fetching content', error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [currentNodeId]);

  useEffect(() => {
    if (!roadMap?.nodes[currentNodeId].content) {
      fetchData();
    }
  }, []);

  const getNextNode = async () => {
    const nextNode = roadMap?.nodes[currentNodeId]?.next;
    if (!nextNode) {
      console.log('No next node');
      return;
    }
    setCurrentNodeId(nextNode);
    await storeElement(CURRENT_NODE_KEY, nextNode);
  };

  const addChildrenNodes = async (nodes: string[]) => {
    if (nodes.length == 0) {
      return;
    }
    const currentNode = roadMap?.nodes[currentNodeId];
    if (!currentNode) {
      console.log('No node');
      return;
    }
    const nextNode = currentNode.next;

    const newRoadMap = _.cloneDeep(roadMap);
    const childrenHash = uuid.v4();
    currentNode.next = childrenHash + '-0';
    for (let i = 0; i < nodes.length; i++) {
      const topic = nodes[i];
      const id = childrenHash + '-' + i.toString();
      newRoadMap.nodes[id] = {
        visited: false,
        type: 'subtopic',
        content: null,
        title: topic,
        children: [],
        next: i == nodes.length - 1 ? nextNode : childrenHash + '-' + (i + 1).toString(),
      };
    }

    newRoadMap.nodes[currentNodeId] = currentNode;
    setRoadMap(newRoadMap);
    await storeRoadMap(newRoadMap);
    setCurrentNodeId(currentNode.next);
    await storeElement(CURRENT_NODE_KEY, currentNode.next);
  };

  const resetAll = async () => {
    await resetLocalStorage();
    updateFromStorage();
    fetchData();
  };

  return (
    <RoadMapContext.Provider
      value={{ roadMap, currentNodeId, loading, setNode, getNextNode, resetAll, addChildrenNodes }}>
      {children}
    </RoadMapContext.Provider>
  );
};
