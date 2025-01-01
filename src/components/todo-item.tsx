import {useState} from 'react';
import {
  Image,
  ImageStyle,
  Pressable,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

type TodoItemProps = {
  item: string;
  index: number;
};

export const TodoItem = ({item, index}: TodoItemProps) => {
  const [isDone, setIsDone] = useState<Boolean>(false);

  return (
    <Pressable style={$row}>
      <Text style={[isDone && $done]}>
        {index + 1}. {item}
      </Text>
      <Pressable onPress={() => setIsDone(!isDone)}>
        <Image source={require('../assets/trash.png')} style={$trash} />
      </Pressable>
    </Pressable>
  );
};

const $trash: ImageStyle = {
  width: 20,
  height: 20,
};
const $row: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingRight: 10,
};

const $done: TextStyle = {
  textDecorationLine: 'line-through',
};
