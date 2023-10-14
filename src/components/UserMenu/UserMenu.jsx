import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/operation';
import { useAuth } from 'hooks/useAuth'; 
import { LogOutBtn, UserMenuWrapper, WelTxt } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper >
      <WelTxt >Welcome, {user.name}</WelTxt>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutBtn>
    </UserMenuWrapper>
  );
};