import { Box, Typography, FormControl, TextField, Button } from '@mui/material'
import classes from '../../CSS/home.module.css'

const MainInfo = () => {
    return (
        <Box>
            <Box flexGrow={1} display={'flex'} pl={12}>
                <Typography variant='h1' textAlign={'center'} color='#fff' fontSize={45} lineHeight={'50px'} mr={2}
                    fontWeight={700} className={classes.rotateEffect}
                >Hesabatınızı </Typography>
                <Typography variant='h1' textAlign={'center'} color='#f50057' fontSize={45} lineHeight={'50px'}
                    fontWeight={700} className={classes.rotateEffect}
                >Frame</Typography>
            </Box>
            <Box flexGrow={1} pl={12}>
                <Typography variant='h1' color='#fff' fontSize={40} lineHeight={'50px'}
                    className={classes.rotateEffect}
                >ilə gəçəkləşdirin</Typography>
            </Box>
            <Box flexGrow={1} pl={12}>
              <Typography variant='subtitle2' maxWidth={500} pt={2}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt animi error nisi! Possimus ullam cupiditate nulla impedit ipsam. Consequatur natus perspiciatis modi placeat excepturi saepe dolorum, tempora totam iure.
              </Typography>
            </Box>
            <Box flexGrow={1} pl={12}>
                <form onSubmit={() => {}}>
                    <FormControl fullWidth margin="normal" error={false} >
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            placeholder='Email'
                            variant="outlined"
                            sx={{
                                maxWidth: '350px',
                                background: 'rgba(0,0,0,.5)',
                                '& .MuiOutlinedInput-input': {
                                    color: '#fff', // Белый цвет текста в поле
                                    '::placeholder': {
                                        color: '#fff', // Цвет placeholder
                                        opacity: 1, // Делает цвет placeholder более насыщенным
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#fff', // Цвет лейбла
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#fff', // Цвет рамки
                                    },
                                },
                                '& .MuiOutlinedInput-root:hover': {
                                    '& fieldset': {
                                        borderColor: '#fff', // Цвет рамки при hover
                                    },
                                },
                                '& .MuiOutlinedInput-root.Mui-focused': {
                                    '& fieldset': {
                                        borderColor: '#fff', // Цвет рамки при фокусировке
                                    },
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#fff', // Цвет лейбла при фокусировке
                                },
                            }}
                        />
                        <Box flexGrow={1} pt={2}>
                            <Button variant="contained"
                                sx={{
                                    minWidth: 'none',
                                    minHeight: 'none',
                                    lineHeight: 'auto',
                                    fontSize: '15px',
                                    bgcolor: '#f50057',
                                    '&:hover': {
                                        bgcolor: '#fff',
                                        color: '#f50057',
                                    }
                                }}>Register</Button>
                        </Box>
                    </FormControl>
                </form>
            </Box>
        </Box>
    )
}

export default MainInfo