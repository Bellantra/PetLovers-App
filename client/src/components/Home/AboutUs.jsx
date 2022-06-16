import { Grid } from '@mui/material'
import Typography from '@mui/material/node/Typography'
import img from '../../assets/about-us-bkg.png'
const AboutUs = () => {
    return (
        <Grid
            style={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '2rem',
                marginBottom: '2rem',
                backgroundImage: `url(${img})`,
            }}
        >
            <Typography
                style={{
                    fontWeight: '800',
                    fontSize: '5rem',
                    lineHeight: '5rem',
                    color: 'white',
                }}
            >
                About Us
            </Typography>
            <Typography
                style={{
                    maxWidth: '40rem',
                    fontWeight: '300',
                    fontSize: '1rem',
                    color: 'white',
                    lineHeight: '2rem',
                    backgroundColor: '#51515184',
                    padding: '1em',
                    borderRadius: '2em',
                    marginTop: '2em',
                }}
            >
                Puppy kitty ipsum dolor sit good dog foot stick canary. Teeth
                Mittens grooming vaccine walk swimming nest good boy furry
                tongue heel furry treats fish. Cage run fast kitten dinnertime
                ball run foot park fleas throw house train licks stick
                dinnertime window. Yawn litter fish yawn toy pet gate throw
                Buddy kitty wag tail ball groom crate ferret heel wet nose Rover
                toys pet supplies. Bird Food treats tongue lick teeth ferret
                litter box slobbery litter box crate bird small animals yawn
                small animals shake slobber gimme five toys polydactyl meow.
                Turtle cage lazy cat foot lazy cat groom canary window tooth
                brush bedding lazy cat pet supplies turtle water dog shake pet
                supplies kitty. Walk bird harness wet nose meow harness grooming
                water dog lol catz water bedding toys bird seed fetch lazy cat.
                Parakeet scratcher brush biscuit lick dog tooth walk food lazy
                cat biscuit. Cockatiel Snowball kitten Rover ferret puppy.
            </Typography>
        </Grid>
    )
}
export default AboutUs
