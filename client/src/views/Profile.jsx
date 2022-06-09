import { useSelector, useDispatch } from 'react-redux'
import { Box } from '@mui/material'
import UserDetail from '../components/Profile/UserDetail'
import Loading from '../components/Loading/Loading'

const Profile = () => {
    const { userInfo } = useSelector((state) => state.user)

    console.log(userInfo)

    // const dispatch = useDispatch()

    return (
        <Box marginY={5}>
            {userInfo ? (
                <UserDetail userInfo={userInfo}></UserDetail>
            ) : (
                <Loading></Loading>
            )}
        </Box>
    )
}

export default Profile
