import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/operation';
import { useAuth } from 'hooks/useAuth'; 

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="UserMenuWrapper">
      <p >Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};