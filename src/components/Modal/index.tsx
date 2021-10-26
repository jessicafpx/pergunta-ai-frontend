import React, {useContext, useState} from 'react';
import { FiDelete, FiTrash, FiX, FiXCircle } from 'react-icons/fi';

import { DefaultContext } from '../../contexts/defaultContext';

import Button from '../Button';

import avatars from '../../assets/avatars';

import { Overlay, Paper, CloseButton } from './styles';

interface Props {
  close: () => void;
  confirm?: () => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  type: 'avatar' | 'accountDelete' | 'questionOrAnswerDelete' |  'feedback';
};



const Modal: React.FC<Props> = ({ type, close, confirm, title, subtitle, buttonText }) => {
  const [selectedAvatar, setSelectedAvatar] = useState('avatar8');
  const { avatar, setAvatar }: any = useContext(DefaultContext);

  const handleAvatarChange = () => {
    setAvatar(selectedAvatar);
    close();
  }

  const handleAccountDelete = () => {
    close();
  }

  const ModalContent = () => {
    switch (type) {
      case 'avatar':
        return (
          <>
            <h3>Alterar avatar</h3>
            <div className="avatars">
              {avatars.map((avatar) => {
                let selected = '';
                if (avatar.avatarName === selectedAvatar) {
                  selected = 'selected'
                }
                return <img key={avatar.avatarName} src={avatar.src} className={selected} alt="avatar" onClick={() => setSelectedAvatar(avatar.avatarName)}/>
              })}
            </div>
            <Button type="submit" onClick={handleAvatarChange}>Confirmar alteração</Button>
          </>
        )
      case 'accountDelete':
        return (
          <>
            <FiXCircle color="#012C50" size="48" />
            <h2>Encerrar conta</h2>
            <h5>Tem certeza que deseja encerrar esta conta?</h5>
            <Button type="submit" onClick={handleAccountDelete}>Encerrar conta</Button>
          </>
        )
      case 'questionOrAnswerDelete':
        return (
          <>
            <FiTrash color="#012C50" size="48" />
            <h2>{title}</h2>
            <h5>{subtitle}</h5>
            <Button type="submit" onClick={handleAccountDelete}>{buttonText}</Button>
          </>
        )
      case 'feedback':
        return (
          <>

          </>
        )
      default:
        return (
          <></>
        )
    }
  }

  return (
    <Overlay>
      <Paper>
        {type !== 'feedback' &&
          <CloseButton onClick={close}>
            <FiX color="#012C50" size="24"/>
          </CloseButton>
        }
        <ModalContent />
      </Paper>
    </Overlay>
  );
}

export default Modal;
