import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/material'
import UserDetail from '../components/Profile/UserDetail'
import Loading from '../components/Loading/Loading'
import { useState } from 'react'
import UserEditForm from '../components/Profile/UserEditForm'

const Profile = () => {
    const { userInfo } = useSelector((state) => state.user)
    const [openProfile, setOpenProfile] = useState(false)

    const handleOpenProfile = () => setOpenProfile(true)
    const handleCloseProfile = () => setOpenProfile(false)

    return (
        <Box marginY={5}>
            {userInfo && openProfile === false && (
                <UserDetail
                    userInfo={userInfo}
                    handleOpen={handleOpenProfile}
                ></UserDetail>
            )}
            {userInfo && openProfile && (
                <UserEditForm
                    userInfo={userInfo}
                    handleClose={handleCloseProfile}
                ></UserEditForm>
            )}
            {!userInfo && !openProfile && <Loading></Loading>}
        </Box>
    )
}

export default Profile
