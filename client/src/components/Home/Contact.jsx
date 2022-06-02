import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import imgContact from '../../assets/contact.png'

import emailjs from '@emailjs/browser'

const serviceID = import.meta.env.VITE_APP_SERVIDE_ID
const templateID = import.meta.env.VITE_APP_TEMPLATE_ID
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY


const theme = createTheme()

export default function Contact() {
    const sendEmail = (event) => {
        event.preventDefault()

        emailjs.sendForm(serviceID, templateID, event.target, publicKey).then(
            (response) => {
                console.log(response)
            },
            (error) => {
                console.log(error)
            }
        )
        event.target.reset()
    }

    return (
        <ThemeProvider theme={theme}>
            <Container
                component="main"
                maxWidth="100%"
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginTop: 3,
                    marginBottom: 2,
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: 500,
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ fontWeight: 800, fontSize: 80 }}
                    >
                        Contact Us
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={sendEmail}
                        sx={{
                            mt: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="message"
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: '#1565C0',
                                width: 79,
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
                <Box>
                    <img
                        src={imgContact}
                        alt="dog-and-owner"
                        width={500}
                        height={600}
                    />
                </Box>
            </Container>
        </ThemeProvider>
    )
}
