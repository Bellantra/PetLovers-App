import {
    Container,
    Paper,
    Box,
    Typography,
    Divider,
    Avatar,
    IconButton,
} from '@mui/material'
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded'

const UserDetail = ({ userInfo }) => {
    return (
        <Container maxWidth="sm">
            <Paper
                elevation={6}
                sx={{
                    background: 'linear-gradient(to right, #bdc3c7, #2c3e50)',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box display="flex" justifyContent="flex-end" width="100%">
                        <IconButton
                            color="primary"
                            aria-label="edit"
                            // onClick={handleOpenProfile}
                        >
                            <ModeEditOutlineRoundedIcon
                                fontSize="large"
                                color="info"
                            />
                        </IconButton>
                    </Box>
                    <Typography variant="h4" marginY={5} color="white">
                        My Profile
                    </Typography>

                    <Divider variante="middle"></Divider>

                    <Avatar
                        sx={{ width: 200, height: 200 }}
                        src={userInfo.img}
                        alt={userInfo.fullName}
                    />

                    <Typography
                        sx={{ p: 1.5, borderRadius: 3, bgcolor: 'white' }}
                        border="1px solid gray"
                        variant="body1"
                        color="text.primary"
                        marginTop={5}
                    >
                        <b> Name:</b> {userInfo.fullName}
                    </Typography>

                    <Typography
                        sx={{ p: 1.5, borderRadius: 3, bgcolor: 'white' }}
                        border="1px solid gray"
                        variant="body1"
                        color="text.primary"
                        marginTop={5}
                    >
                        <b> Nickname:</b> {userInfo.nickname}
                    </Typography>

                    <Typography
                        sx={{ p: 1.5, borderRadius: 3, bgcolor: 'white' }}
                        border="1px solid gray"
                        variant="body1"
                        color="text.primary"
                        marginTop={5}
                        marginBottom={5}
                    >
                        <b> Email:</b> {userInfo.email}
                    </Typography>
                </Box>
            </Paper>
        </Container>
    )
}

export default UserDetail
