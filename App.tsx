import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {TodoItem} from './src/components';

function App(): React.JSX.Element {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = () => {
    if (value) {
      setTodos([...todos, value]);
      setValue('');
    }
  };

  return (
    <SafeAreaView style={$container}>
      <Text style={$title}>Todo App</Text>
      <View style={$row}>
        <TextInput
          placeholder="Enter name"
          numberOfLines={1}
          value={value}
          onChangeText={setValue}
          style={$input}
          placeholderTextColor={'#000'}
        />
        <Pressable style={$button} onPress={handleAddTodo}>
          <Text style={{color: 'white'}}>Add</Text>
        </Pressable>
      </View>
      <FlatList
        contentContainerStyle={$itemContainer}
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TodoItem
            item={item}
            onDelete={() => setTodos(todos.filter((_, i) => i! == index))}
          />
        )}
      />
    </SafeAreaView>
  );
}

// StyleSheet.create method for styling

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 16,
//   },
//   title: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 24,
//   },
// });

// Styles

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: 'white',
  padding: 16,
};

const $title: TextStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 24,
};
const $input: TextStyle = {
  paddingHorizontal: 16,
  paddingVertical: 4,
  borderWidth: 1,
  borderColor: '#000',
  borderRadius: 4,
  color: '##000',
  flex: 1,
};

const $button: ViewStyle = {
  backgroundColor: 'purple',
  paddingHorizontal: 16,
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: 'center',
};

const $row: ViewStyle = {
  marginTop: 20,
  width: '100%',
  flexDirection: 'row',
  alignItems: 'stretch',
  gap: 16,
};
const $itemContainer: ViewStyle = {
  marginTop: 16,
  paddingHorizontal: 16,
  gap: 8,
};

export default App;
