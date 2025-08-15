import React, { useState } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  scaleWidth,
  scaleHeight,
  scaleFont,
  fullWidth,
} from '../constants/scaling';

import Home from '../screens/App/Home/Home';
import Calendar from '../screens/App/Calendar/Calendar';
import AddTask from '../screens/App/AddTask/AddTask';
import Notes from '../screens/App/Notes/Notes';
import Profile from '../screens/App/Profile/Profile';

const { width } = Dimensions.get('window');

const screens = [
  { name: 'Home', component: Home, icon: 'home-outline' },
  { name: 'Calendar', component: Calendar, icon: 'calendar-outline' },
  { name: 'AddTask', component: AddTask, icon: 'add-circle-outline' },
  { name: 'Notes', component: Notes, icon: 'document-text-outline' },
  { name: 'Profile', component: Profile, icon: 'person-outline' },
];

const tabWidth = width / screens.length;
const indicatorWidth = scaleWidth(40); // Same as icon container width

export default function TabNavigator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);
  const indicatorTranslateX = useSharedValue(0);

  const handleSwipe = (direction: 'left' | 'right') => {
    let nextIndex = currentIndex;
    if (direction === 'left' && currentIndex < screens.length - 1) nextIndex++;
    if (direction === 'right' && currentIndex > 0) nextIndex--;

    setCurrentIndex(nextIndex);
    translateX.value = withTiming(-width * nextIndex, { duration: 300 });
    indicatorTranslateX.value = withTiming(
      tabWidth * nextIndex + (tabWidth - indicatorWidth) / 2,
      { duration: 250 },
    );
  };

  const handleTabPress = (index: number) => {
    setCurrentIndex(index);
    translateX.value = withTiming(-width * index, { duration: 300 });
    indicatorTranslateX.value = withTiming((width / screens.length) * index, {
      duration: 250,
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorTranslateX.value }],
  }));

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    const { translationX, velocityX } = event.nativeEvent;
    if (translationX < -50 || velocityX < -500) handleSwipe('left');
    else if (translationX > 50 || velocityX > 500) handleSwipe('right');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Swipeable Screens */}
      <PanGestureHandler onEnded={onGestureEvent}>
        <Animated.View style={[styles.container, animatedStyle]}>
          {screens.map((screen, index) => (
            <View key={index} style={{ width, flex: 1 }}>
              <screen.component />
            </View>
          ))}
        </Animated.View>
      </PanGestureHandler>

      {/* Modern Bottom Tabs */}
      <View style={styles.tabBarWrapper}>
        {/* Animated Top Indicator */}
        {/* <Animated.View style={[styles.topIndicator, indicatorStyle]} /> */}

        <View style={styles.tabBar}>
          {screens.map((screen, index) => {
            const isActive = index === currentIndex;

            return (
              <TouchableOpacity
                key={index}
                style={styles.tabItem}
                activeOpacity={0.6}
                onPress={() => handleTabPress(index)}
              >
                <View
                  style={[
                    styles.tabContent,
                    isActive && styles.activeTabContent,
                  ]}
                >
                  {/* Modern Icon Container */}
                  <View
                    style={[
                      styles.iconContainer,
                      isActive && styles.activeIconContainer,
                    ]}
                  >
                    <Ionicons
                      name={screen.icon}
                      size={scaleFont(24)}
                      color={isActive ? '#FFFFFF' : '#6B7280'}
                    />
                  </View>

                  {/* Tab Label */}
                  <Text
                    style={[styles.tabLabel, isActive && styles.activeTabLabel]}
                  >
                    {screen.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width * screens.length,
    flex: 1,
  },

  tabBarWrapper: {
    backgroundColor: '#FFFFFF',
    paddingTop: 0,
    paddingBottom: 20,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },

  topIndicator: {
    position: 'absolute',
    top: 0,
    left: 16,
    width: width / screens.length - 32 / screens.length,
    height: 3,
    backgroundColor: '#4F46E5',
    borderRadius: 2,
    marginHorizontal: 16 / screens.length,
  },

  tabBar: {
    flexDirection: 'row',
    height: 64,
    alignItems: 'center',
    paddingTop: 8,
  },

  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },

  activeTabContent: {
    // Additional styling for active state if needed
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginBottom: 4,
  },

  activeIconContainer: {
    backgroundColor: '#4F46E5',
    borderRadius: 20, // Ensuring circle shape is maintained
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },

  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: '#6B7280',
    letterSpacing: 0.5,
  },

  activeTabLabel: {
    color: '#4F46E5',
    fontWeight: '600',
  },
});
