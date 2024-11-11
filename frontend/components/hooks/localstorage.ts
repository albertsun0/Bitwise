import AsyncStorage from '@react-native-async-storage/async-storage';
import { topics } from './topics';

export const storeJSON = async (key: string, value: any) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.log("Error storing json data", e);
    }
};

export const getJSON = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("Error fetching json data", e);
    }
};

export const storeElement = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log("Error storing element", e);
    }
}

export const getElement = async (key: string) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {
        console.log("Error fetching element", e);
    }
}

type RoadMapNodeType = "chapter" | "topic" | "subtopic";

type RoadMapNodeContent = {
    title: string;
    content: string;
    sources?: string[];
    tags?: string[];
    related?: string[];
}
export type RoadMapNode = {
    visited: boolean;
    type: RoadMapNodeType;
    content: RoadMapNodeContent | null;
    title: string;
    children: string[]; // list of ids for children nodes
    next: string; // id of next node
}

export type RoadMap = {
    name: string;
    nodes: { [id: string]: RoadMapNode; };
    first: string;
}

export const ROAD_MAP_KEY = "roadmap";
export const CURRENT_NODE_KEY = "current_node";
export const storeRoadMap = async (roadMap: RoadMap) => {
    await storeJSON(ROAD_MAP_KEY, roadMap);
}

export const resetLocalStorage = async (): Promise<RoadMap> => {
    const NewRoadMap: RoadMap = {
        name: "Distributed Data Storage",
        nodes: {},
        first: "0",
    };

    for (let i = 0; i < topics.length; i++) {
        const topic = topics[i];
        NewRoadMap.nodes[i.toString()] = {
            visited: false,
            type: "chapter",
            content: null,
            title: topic,
            children: [],
            next: i == topics.length - 1 ? "" : (i + 1).toString(),
        };
    }
    console.log(NewRoadMap)
    await storeElement(CURRENT_NODE_KEY, "0");
    await storeRoadMap(NewRoadMap);
    return NewRoadMap;
}

export const getRoadMap = async () => {
    const result = await getJSON(ROAD_MAP_KEY);
    if (result === null) {
        return await resetLocalStorage();
    }
    return result;
}

