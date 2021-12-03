
import { CheckIcon } from '../../assets/check';

import { Container, BoxInput, BoxControl } from './styles';

type Props = {
  checked?: boolean;
  onChange?: () => void;
};

const CheckBox = ({ checked = false, onChange }: Props) => (
  <Container onClick={onChange}>
    <BoxInput>
      <BoxControl isChecked={checked}>{checked && <CheckIcon />}</BoxControl>
    </BoxInput>
  </Container>
);

export default CheckBox;
