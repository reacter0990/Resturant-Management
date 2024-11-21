import {
    Box, Typography,
    List, ListItem, ListItemText
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../../Images/Screenshot_2024-10-23_221320-removebg-preview.png'

const Footer = () => {
    return (
        <Box component={'footer'} flexGrow={1}
            bgcolor={'#000'} pb={2}
        >
            <Box flexGrow={1} p={1} display={'flex'} justifyContent={'space-between'}>
                <Box display={'flex'} alignItems={'center'}>
                    <img src={Logo} alt='' style={{ height: 80 }} />
                    <Typography variant='h6' color='#fff' lineHeight={'auto'} ml={2}>Key Frames</Typography>
                </Box>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}
                    minWidth={200} pr={2}>
                    <GoogleIcon />
                    <YouTubeIcon />
                    <LinkedInIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                </Box>
            </Box>
            <Box flexGrow={1} display={'flex'} pr={2} pl={2} minHeight={200}>
                <Grid container flexGrow={1}>
                    <Grid size={3}>
                        <Box flexGrow={1} p={5}>
                            <Typography variant='h6' fontSize={20} lineHeight={'18px'}
                                textAlign={'left'}
                            >
                                Key Frames
                            </Typography>
                            <Typography variant='subtitle1' fontSize={10} lineHeight={'13px'} pt={3.5}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis inventore amet, corrupti tenetur non soluta dolorem provident vel aliquid molestias iusto delectus debitis est perspiciatis laborum, possimus ipsa quam! Atque?
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={3}>
                        <Box flexGrow={1} p={5}>
                            <Typography variant='h6' fontSize={20} lineHeight={'25px'}>
                                Lorem Ipsum
                            </Typography>
                            <List>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                    <Grid size={3}>
                        <Box flexGrow={1} p={5}>
                            <Typography variant='h6' fontSize={20} lineHeight={'25px'}>
                                Lorem Ipsum
                            </Typography>
                            <List>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                    <Grid size={3}>
                        <Box flexGrow={1} p={5}>
                            <Typography variant='h6' fontSize={20} lineHeight={'25px'}>
                                Lorem Ipsum
                            </Typography>
                            <List>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0 }}>
                                    <ListItemText primary='Lorem Ipsum'
                                        primaryTypographyProps={{ style: { fontSize: 12, color: '#fff' } }}
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box flexGrow={1}>
            <Typography variant='subtitle1' textAlign={'center'} fontSize={12}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Typography>
            </Box>
        </Box>
    )
}

export default Footer