
import { useSelector } from 'react-redux'

const AuthHook = () => {
    const {email,id,token} = useSelector(state=>state.users);

  return (
    { isAuth:!!email,
        email,id,token
      
    }
  )
}

export default AuthHook