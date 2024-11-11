import { Text, Button, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { MainContent } from './reader/MainContent';
import { Settings } from './settings/SettingsPage';
import { History } from './history/History';
import { Container } from './Container';
import { Drawer } from 'react-native-drawer-layout';
import { styles } from './ui/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

type screensType = 'Read' | 'History' | 'Options';

const screens: screensType[] = ['Read', 'History', 'Options'];
export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  const [open, setOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<screensType>('Read');
  return (
    <View className="h-full bg-black text-white">
      <Drawer
        drawerStyle={{ overflow: 'hidden' }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        drawerType="slide"
        swipeEdgeWidth={2000}
        overlayStyle={{ backgroundColor: 'transparent' }}
        renderDrawerContent={() => {
          return (
            <Container styles={`${open ? 'border-r border-[#363433]' : ''} p-4 gap-8`}>
              <>
                <Text className="text-3xl font-bold text-white">Bitwise</Text>
                <View className="h-full gap-2 bg-black">
                  {screens.map((screen: screensType) => (
                    <TouchableOpacity
                      key={screen}
                      onPress={() => {
                        setCurrentScreen(screen);
                        setOpen(false);
                      }}
                      className={`px-4 py-2 ${styles.border}`}>
                      <Text className="text-xl text-white">{screen}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            </Container>
          );
        }}>
        <Container>
          {currentScreen === 'Read' && <MainContent path={path} />}
          {currentScreen === 'History' && <History />}
          {currentScreen === 'Options' && <Settings />}
          <TouchableOpacity
            className={`absolute top-0 ml-8 mt-20 ${styles.border} bg-black p-2`}
            onPress={() => setOpen(true)}>
            <Ionicons name="menu" size={32} color="white" />
          </TouchableOpacity>
        </Container>
      </Drawer>
    </View>
  );
};
