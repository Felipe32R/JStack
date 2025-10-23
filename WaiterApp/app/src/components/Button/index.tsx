
import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import { Container } from './styles';

type ButtonProps = {
  children: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({children, onPress, disabled = false, loading}: ButtonProps) {
  return (
    <Container disabled={disabled || loading} onPress={onPress}>
      {!loading && (
        <Text weight='600' color='#fff'>{children}</Text>
      )}

      {loading && (
        <ActivityIndicator color='#fff'/>
      )}
    </Container>
  );
}
