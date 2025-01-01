import {Image, ImageStyle, Pressable, Text, ViewStyle} from 'react-native';

type TodoItemProps = {
  item: string;

  onDelete: () => void;
};

export const TodoItem = ({item, onDelete}: TodoItemProps) => {
  return (
    <Pressable style={$row}>
      <Text>{item}</Text>
      <Pressable>
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
