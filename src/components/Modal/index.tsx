import React, {useCallback, useState} from 'react';
import { FiTrash, FiX, FiXCircle } from 'react-icons/fi';

import Button from '../Button';

import avatars from '../../assets/avatars';

import { Overlay, Paper, CloseButton, Form } from './styles';
import { useAuth } from '../../contexts/auth';
import api from '../../services/api';

interface Props {
  close: () => void;
  confirm?: () => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  type: 'avatar' | 'accountDelete' | 'questionOrAnswerDelete' |  'feedback' | 'passwordChange' ;
};

const Modal: React.FC<Props> = ({ type, close, confirm, title, subtitle, buttonText }) => {
  const { user, updateUser } = useAuth();
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatar);
  const [inputOldPassword, setInputOldPassword] = useState('');
  const [inputNewPassword, setInputNewPassword] = useState('');
  const [inputNewPasswordAgain, setInputNewPasswordAgain] = useState('');

  const handleAvatarChange = useCallback(async() => {
    const newUser = {...user, avatar: selectedAvatar}
    updateUser(newUser);

    const response = await api.put(`/user/${user.id}`, {
      name: newUser.name,
      course: newUser.course,
      avatarOptions: newUser.avatar,
      birthDate: newUser.birthDate
    });
    console.log(response)

    close();
  }, [close, selectedAvatar, updateUser, user]);

  const handleAccountDelete = () => {
    close();
  }

  const handlePasswordChange = useCallback(async(event) => {
    event.preventDefault();
    console.log('submitou')
  }, []);

  const ModalContent = () => {
    switch (type) {
      case 'avatar':
        return (
          <>
            <div className="title">
              <h3>Alterar avatar</h3>
            </div>
            <div className="avatars">
              {avatars.map((img) => {
                let selected = '';
                if (img.avatarName === selectedAvatar) {
                  selected = 'selected'
                }
                return <img key={img.avatarName} src={img.src} className={selected} alt="avatar" onClick={() => setSelectedAvatar(img.avatarName)}/>
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
            <h4>{title}</h4>
            <Button type="submit" onClick={close}>{buttonText}</Button>
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
        {type === 'passwordChange' && (
          <>
            <div className="title">
              <h3>Alterar senha</h3>
            </div>
            <Form onSubmit={handlePasswordChange}>
              <fieldset>
                <legend>
                  Senha atual
                </legend>
                <input type="password" value={inputOldPassword} onChange={(e) => setInputOldPassword(e.target.value)} />
              </fieldset>
              <fieldset>
                <legend>
                  Nova senha
                </legend>
                <input type="password" value={inputNewPassword} onChange={(e) => setInputNewPassword(e.target.value)} />
              </fieldset>
              <fieldset>
                <legend>
                  Confirmação da nova senha
                </legend>
                <input type="password" value={inputNewPasswordAgain} onChange={(e) => setInputNewPasswordAgain(e.target.value)} />
              </fieldset>
              <Button type="submit">Confirmar alteração</Button>
            </Form>
          </>
        )}
      </Paper>
    </Overlay>
  );
}

export default Modal;
