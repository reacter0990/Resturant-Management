import {
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Typography,
    Button
} from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../../Images/Screenshot_2024-10-23_221320-removebg-preview.png'

const Nav = () => {
    console.log('Switched')
    return (
        <Box component={'nav'} position={'absolute'} top={0} left={0} right={0} bgcolor={'rgba(26,26,26,.5)'}>
            <List sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ListItem>
                    <ListItemAvatar sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar src={Logo} sx={{ mr: 2 }} />
                        <ListItemText primary="Key Frames" />
                    </ListItemAvatar>
                </ListItem>
                <ListItem>
                    <List sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <ListItem>
                            <Typography variant='h6' fontSize={12}>Home</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='h6' fontSize={12}>About</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='h6' fontSize={12}>Contact</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='h6' fontSize={12}>Contact</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='h6' fontSize={12}>Contact</Typography>
                        </ListItem>
                    </List>
                </ListItem>
                <ListItem>
                    <List sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexGrow: 1, pr: 2 }}>
                            <ListItem sx={{ p: 0, maxWidth: 80 }} >
                                <Button variant="outlined" 
                                   component={Link}
                                   to="/login"
                                    sx={{
                                        minWidth: 'none',
                                        minHeight: 'none',
                                        lineHeight: 'auto',
                                        fontSize: '10px',
                                        color: '#f50057',
                                        border: '2px solid #f50057',
                                        '&:hover': { // правильный синтаксис для hover
                                            color: '#fff', // цвет текста при наведении
                                            borderColor: '#fff', // цвет границы при наведении
                                        },
                                        '&:focus, &:focus-visible': {
                                            color: '#f50057',
                                            border: '2px solid #f50057', // вернуть цвет границы после нажатия
                                        }
                                    }}
                                >
                                    Sing In
                                </Button>
                            </ListItem>
                        <ListItem sx={{ p: 0, maxWidth: 85 }}>
                            <Button variant="contained"
                                sx={{
                                    minWidth: 'none',
                                    minHeight: 'none',
                                    lineHeight: 'auto',
                                    fontSize: '10px',
                                    bgcolor: '#f50057',
                                    '&:hover': {
                                        bgcolor: '#fff',
                                        color: '#f50057',
                                    },
                                }}
                            >Sing Up</Button>
                        </ListItem>
                    </List>
                </ListItem>
            </List>
        </Box>
    )
}

export default Nav