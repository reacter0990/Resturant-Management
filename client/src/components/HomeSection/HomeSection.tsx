import Box from '@mui/material/Box'
import {
  List,
  Button,
  ListItem,
  ListItemIcon,
  Typography,
  ListItemText
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import DevicesIcon from '@mui/icons-material/Devices';
import BarChartIcon from '@mui/icons-material/BarChart';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Imac27 from '../../Images/APPLE-27-IMAC-WITH-RETINA-5K-DISPLAY-MID-2020-3.1GHZ-6-CORE-10TH-GEN-INTEL-removebg-preview.png'

const HomeSection = () => {
  return (
    <Box>
      <Box component={'section'} flexGrow={1} bgcolor={'#fff'} pt={4} pb={4}
      >
        <Box flexGrow={1} display={'flex'} p={4}>
          <Box display={'flex'} alignItems={'center'}>
            <AccessTimeIcon sx={{ color: '#f50057', fontSize: 100 }} />
          </Box>
          <Box pl={3}>
            <Typography variant='h6' fontSize={30} lineHeight={'auto'} color={'#000'}>Lorem Ipsum</Typography>
            <Typography variant='subtitle1' fontSize={18} lineHeight={'20px'} color={'#000'} maxWidth={800}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci ad sunt corrupti laborum at doloremque dignissimos labore exercitationem natus aliquid soluta, sed ea eos tenetur veritatis, aliquam tempora praesentium.
            </Typography>
          </Box>
        </Box>
        <Box flexGrow={1} display={'flex'} height={'calc(100% - 206.5px)'}>
          <Box flexGrow={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box height={'100%'} width={'70%'}>
              <img src={Imac27} alt='' style={{ height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
          <Box flexGrow={1} display={'flex'}>
            <Box height={'100%'} pt={10}>
              <Typography variant='h1' fontSize={40} lineHeight={'45px'} color={'#000'}>Lorem Ipsum</Typography>
              <List sx={{ pt: 3 }}>
                <ListItem>
                  <ListItemIcon>
                    <DevicesIcon sx={{ color: '#000', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Soft Interface'
                    primaryTypographyProps={{ style: { fontSize: 20, color: '#000' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CurrencyExchangeIcon sx={{ color: '#000', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Profit Analize'
                    primaryTypographyProps={{ style: { fontSize: 20, color: '#000' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <VerifiedUserIcon sx={{ color: '#000', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Safe Data'
                    primaryTypographyProps={{ style: { fontSize: 20, color: '#000' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WarehouseIcon sx={{ color: '#000', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Warehouse Accounting'
                    primaryTypographyProps={{ style: { fontSize: 20, color: '#000' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SupportAgentIcon sx={{ color: '#000', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='7/24 Support'
                    primaryTypographyProps={{ style: { fontSize: 20, color: '#000' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BarChartIcon sx={{ color: '#000', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='All Data Analize'
                    primaryTypographyProps={{ style: { fontSize: 20, color: '#000' } }}
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component={'section'} flexGrow={1} bgcolor={'#000'} pt={4} pb={4}
      >
        <Box flexGrow={1} display={'flex'} p={4} justifyContent={'end'}>
          <Box pr={3}>
            <Typography variant='h6' fontSize={30} lineHeight={'auto'} color={'#fff'} textAlign={'start'}>Lorem Ipsum</Typography>
            <Typography variant='subtitle1' fontSize={18} lineHeight={'20px'} color={'#fff'} maxWidth={800} textAlign={'start'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci ad sunt corrupti laborum at doloremque dignissimos labore exercitationem natus aliquid soluta, sed ea eos tenetur veritatis, aliquam tempora praesentium.
            </Typography>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <AccessTimeIcon sx={{ color: '#f50057', fontSize: 100 }} />
          </Box>
        </Box>
        <Box flexGrow={1} display={'flex'} height={'calc(100% - 206.5px)'}>
          <Box flexGrow={1} display={'flex'} justifyContent={'center'}>
            <Box height={'100%'} pt={10}>
              <Typography variant='h1' fontSize={40} lineHeight={'45px'}>Lorem Ipsum</Typography>
              <List sx={{ pt: 3 }}>
                <ListItem>
                  <ListItemIcon>
                    <DevicesIcon sx={{ color: '#fff', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Soft Interface'
                    primaryTypographyProps={{ style: { fontSize: 20 } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CurrencyExchangeIcon sx={{ color: '#fff', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Profit Analize'
                    primaryTypographyProps={{ style: { fontSize: 20 } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <VerifiedUserIcon sx={{ color: '#fff', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Safe Data'
                    primaryTypographyProps={{ style: { fontSize: 20 } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WarehouseIcon sx={{ color: '#fff', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Warehouse Accounting'
                    primaryTypographyProps={{ style: { fontSize: 20 } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SupportAgentIcon sx={{ color: '#fff', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='7/24 Support'
                    primaryTypographyProps={{ style: { fontSize: 20 } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BarChartIcon sx={{ color: '#fff', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='All Data Analize'
                    primaryTypographyProps={{ style: { fontSize: 20 } }}
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box flexGrow={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box height={'100%'} width={'70%'}>
              <img src={Imac27} alt='' style={{ height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component={'section'} flexGrow={1} bgcolor={'#fff'} pt={4} pb={4}
      >
        <Box flexGrow={1} display={'flex'} p={4}>
          <Box display={'flex'} alignItems={'center'}>
            <AccessTimeIcon sx={{ color: '#f50057', fontSize: 100 }} />
          </Box>
          <Box pl={3}>
            <Typography variant='h6' fontSize={30} lineHeight={'auto'} color={'#000'}>Lorem Ipsum</Typography>
            <Typography variant='subtitle1' fontSize={18} lineHeight={'20px'} color={'#000'} maxWidth={800}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci ad sunt corrupti laborum at doloremque dignissimos labore exercitationem natus aliquid soluta, sed ea eos tenetur veritatis, aliquam tempora praesentium.
            </Typography>
          </Box>
        </Box>
        <Box flexGrow={1} display={'flex'} height={'calc(100% - 206.5px)'}>
          <Box flexGrow={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box height={'100%'} width={'70%'}>
              <img src={Imac27} alt='' style={{ height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
          <Box flexGrow={1} display={'flex'}>
            <Box height={'100%'} pt={10}>
              <Typography variant='h1' fontSize={40} lineHeight={'45px'} color={'#000'}>Lorem Ipsum</Typography>
              <List sx={{ pt: 3 }}>
                <ListItem>
                  <ListItemIcon>
                    <DevicesIcon sx={{ color: '#000', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Soft Interface'
                    primaryTypographyProps={{ style: { fontSize: 20, color: '#000' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CurrencyExchangeIcon sx={{ color: '#000', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Profit Analize'
                    primaryTypographyProps={{ style: { fontSize: 20, color: '#000' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <VerifiedUserIcon sx={{ color: '#000', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Safe Data'
                    primaryTypographyProps={{ style: { fontSize: 20, color: '#000' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WarehouseIcon sx={{ color: '#000', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Warehouse Accounting'
                    primaryTypographyProps={{ style: { fontSize: 20, color: '#000' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SupportAgentIcon sx={{ color: '#000', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='7/24 Support'
                    primaryTypographyProps={{ style: { fontSize: 20, color: '#000' } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BarChartIcon sx={{ color: '#000', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='All Data Analize'
                    primaryTypographyProps={{ style: { fontSize: 20, color: '#000' } }}
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component={'section'} flexGrow={1} bgcolor={'#000'} pt={4} pb={4}
      >
        <Box flexGrow={1} display={'flex'} p={4} justifyContent={'end'}>
          <Box pr={3}>
            <Typography variant='h6' fontSize={30} lineHeight={'auto'} color={'#fff'} textAlign={'start'}>Lorem Ipsum</Typography>
            <Typography variant='subtitle1' fontSize={18} lineHeight={'20px'} color={'#fff'} maxWidth={800} textAlign={'start'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci ad sunt corrupti laborum at doloremque dignissimos labore exercitationem natus aliquid soluta, sed ea eos tenetur veritatis, aliquam tempora praesentium.
            </Typography>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <AccessTimeIcon sx={{ color: '#f50057', fontSize: 100 }} />
          </Box>
        </Box>
        <Box flexGrow={1} display={'flex'} height={'calc(100% - 206.5px)'}>
          <Box flexGrow={1} display={'flex'} justifyContent={'center'}>
            <Box height={'100%'} pt={10}>
              <Typography variant='h1' fontSize={40} lineHeight={'45px'}>Lorem Ipsum</Typography>
              <List sx={{ pt: 3 }}>
                <ListItem>
                  <ListItemIcon>
                    <DevicesIcon sx={{ color: '#fff', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Soft Interface'
                    primaryTypographyProps={{ style: { fontSize: 20 } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CurrencyExchangeIcon sx={{ color: '#fff', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Profit Analize'
                    primaryTypographyProps={{ style: { fontSize: 20 } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <VerifiedUserIcon sx={{ color: '#fff', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Safe Data'
                    primaryTypographyProps={{ style: { fontSize: 20 } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WarehouseIcon sx={{ color: '#fff', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='Warehouse Accounting'
                    primaryTypographyProps={{ style: { fontSize: 20 } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SupportAgentIcon sx={{ color: '#fff', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='7/24 Support'
                    primaryTypographyProps={{ style: { fontSize: 20 } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BarChartIcon sx={{ color: '#fff', fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText primary='All Data Analize'
                    primaryTypographyProps={{ style: { fontSize: 20 } }}
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box flexGrow={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box height={'100%'} width={'70%'}>
              <img src={Imac27} alt='' style={{ height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box flexGrow={1} bgcolor={'#fff'}>
        <Box flexGrow={1} pt={5} pl={5}>
        <Typography variant='h1' color="#000" fontSize={55} lineHeight='34px'
        textAlign={'center'} fontWeight={600}
        >
          Pricing 
        </Typography>
        </Box>
        <Box flexGrow={1} display={'flex'}
        justifyContent={'center'} pt={10} pb={15}>
        <Grid container width={'80%'} height={'100%'}>
          <Grid size={4} height={'100%'} display={'flex'}
            alignItems={'center'} justifyContent={'center'} 
            position={'relative'} zIndex={0}>
            <Box width={'95%'} border={'1px solid #5f30e2'}
              borderRadius={5} p={5} sx={{transform:'translateX(30px) translateY(15px) rotate(-5deg)'}}
            >
              <Box>
                <Typography variant='h6' fontSize={35} color={'#5f30e2'}
                >Intro</Typography>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <Typography variant='h1' fontWeight={600} fontSize={35} color={'#000'}
                pt={2} pb={2}
                >$16</Typography>
                <Typography variant='h3' fontWeight={500} fontSize={20} color={'rgba(0, 0, 0, .3)'} ml={1}>
                  / Year
                </Typography>
              </Box>
              <Box flexGrow={1}>
                <Typography variant='subtitle1' color='rgba(0, 0, 0, .5)' lineHeight={'18px'}>
                For most businesses that want to optiimize web queries
                </Typography>
              </Box>
              <Box flexGrow={1}>
                 <List sx={{flexGrow: 1, pt: 4}}>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: 'rgba(0, 0, 0, .4)'}}/>
                     </ListItemIcon>
                     <ListItemText primary='All limited links'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#000', flexGrow: 1 } }}
                     />
                   </ListItem>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: 'rgba(0, 0, 0, .4)'}}/>
                     </ListItemIcon>
                     <ListItemText primary='Own analytics platform
'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#000', flexGrow: 1 } }}
                     />
                   </ListItem>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: 'rgba(0, 0, 0, .4)'}}/>
                     </ListItemIcon>
                     <ListItemText primary='Chat support'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#000', flexGrow: 1 } }}
                     />
                   </ListItem>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: 'rgba(0, 0, 0, .4)'}}/>
                     </ListItemIcon>
                     <ListItemText primary='Optimize hashtags'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#000', flexGrow: 1 } }}
                     />
                   </ListItem>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: 'rgba(0, 0, 0, .4)'}}/>
                     </ListItemIcon>
                     <ListItemText primary='Unlimited users'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#000', flexGrow: 1 } }}
                     />
                   </ListItem>
                 </List>
              </Box>
              <Box flexGrow={1} display={'flex'} justifyContent={'center'} pt={2} pb={2}>
              <Button variant="outlined" sx={{fontSize: 20, color: '#5f30e2', borderColor: '#5f30e2' }}>Subscribe</Button>
              </Box>
            </Box>
          </Grid>
          <Grid size={4} height={'100%'} display={'flex'}
            alignItems={'center'} justifyContent={'center'}
            position={'relative'} zIndex={1}
            >
            <Box width={'95%'} bgcolor={'#5f30e2'} p={5}
              border={'1px solid #5f30e2'} borderRadius={5} 
            >
              <Box>
                <Typography variant='h6' fontSize={35} color={'#fff'}
                >Basic</Typography>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <Typography variant='h1' fontWeight={600} fontSize={35} color={'#fff'}
                pt={2} pb={2}
                >$16</Typography>
                <Typography variant='h3' fontWeight={500} fontSize={20} color={'#fff'} ml={1}>
                  / Year
                </Typography>
              </Box>
              <Box flexGrow={1}>
                <Typography variant='subtitle1' color='#fff' lineHeight={'18px'}>
                For most businesses that want to optiimize web queries
                </Typography>
              </Box>
              <Box flexGrow={1}>
                 <List sx={{flexGrow: 1, pt: 4}}>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: '#fff'}}/>
                     </ListItemIcon>
                     <ListItemText primary='All limited links'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#fff', flexGrow: 1 } }}
                     />
                   </ListItem>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: '#fff'}}/>
                     </ListItemIcon>
                     <ListItemText primary='Own analytics platform
'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#fff', flexGrow: 1 } }}
                     />
                   </ListItem>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: '#fff'}}/>
                     </ListItemIcon>
                     <ListItemText primary='Chat support'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#fff', flexGrow: 1 } }}
                     />
                   </ListItem>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: '#fff'}}/>
                     </ListItemIcon>
                     <ListItemText primary='Optimize hashtags'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#fff', flexGrow: 1 } }}
                     />
                   </ListItem>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: '#fff'}}/>
                     </ListItemIcon>
                     <ListItemText primary='Unlimited users'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#fff', flexGrow: 1 } }}
                     />
                   </ListItem>
                 </List>
              </Box>
              <Box flexGrow={1} display={'flex'} justifyContent={'center'} pt={2} pb={2}>
              <Button variant="outlined" sx={{fontSize: 20, color: '#fff', borderColor: '#fff' }}>Subscribe</Button>
              </Box>
            </Box>
          </Grid>
          <Grid size={4} height={'100%'} display={'flex'}
            alignItems={'center'} justifyContent={'center'}
            position={'relative'} zIndex={0}
            >
            <Box width={'95%'} border={'1px solid #5f30e2'}
              borderRadius={5} p={5} sx={{transform:'translateX(-30px) translateY(15px) rotate(5deg)'}}
            >
              <Box>
                <Typography variant='h6' fontSize={35} color={'#5f30e2'}
                >Intro</Typography>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <Typography variant='h1' fontWeight={600} fontSize={35} color={'#000'}
                pt={2} pb={2}
                >$16</Typography>
                <Typography variant='h3' fontWeight={500} fontSize={20} color={'rgba(0, 0, 0, .3)'} ml={1}>
                  / Year
                </Typography>
              </Box>
              <Box flexGrow={1}>
                <Typography variant='subtitle1' color='rgba(0, 0, 0, .5)' lineHeight={'18px'}>
                For most businesses that want to optiimize web queries
                </Typography>
              </Box>
              <Box flexGrow={1}>
                 <List sx={{flexGrow: 1, pt: 4}}>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: 'rgba(0, 0, 0, .4)'}}/>
                     </ListItemIcon>
                     <ListItemText primary='All limited links'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#000', flexGrow: 1 } }}
                     />
                   </ListItem>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: 'rgba(0, 0, 0, .4)'}}/>
                     </ListItemIcon>
                     <ListItemText primary='Own analytics platform
'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#000', flexGrow: 1 } }}
                     />
                   </ListItem>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: 'rgba(0, 0, 0, .4)'}}/>
                     </ListItemIcon>
                     <ListItemText primary='Chat support'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#000', flexGrow: 1 } }}
                     />
                   </ListItem>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: 'rgba(0, 0, 0, .4)'}}/>
                     </ListItemIcon>
                     <ListItemText primary='Optimize hashtags'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#000', flexGrow: 1 } }}
                     />
                   </ListItem>
                   <ListItem sx={{pl: 0, pr: 0}}>
                     <ListItemIcon sx={{ minWidth: '38px'}}>
                        <CheckCircleIcon sx={{color: 'rgba(0, 0, 0, .4)'}}/>
                     </ListItemIcon>
                     <ListItemText primary='Unlimited users'
                      primaryTypographyProps={{ style: { fontSize: 20, color: '#000', flexGrow: 1 } }}
                     />
                   </ListItem>
                 </List>
              </Box>
              <Box flexGrow={1} display={'flex'} justifyContent={'center'} pt={2} pb={2}>
              <Button variant="outlined" sx={{fontSize: 20, color: '#5f30e2', borderColor: '#5f30e2' }}>Subscribe</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeSection