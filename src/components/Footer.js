import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const Edit = () => <Text>Edit</Text>;


const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'edit', title: 'Edit', icon: 'square-edit-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    edit: Edit,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;