
import Box from '@mui/material/Box';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import TextField from '@mui/material/TextField';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function LeftContent() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-7 w-1/2 p-2">
        <h1 className="text-5xl font-bold">Welcome</h1>
        <span>We are glad to see you back with us</span>
        <Box sx={{ 
          backgroundColor: 'rgb(226 232 240)',
          paddingLeft: 2,
          width: '50%',
          display: 'flex', 
          alignItems: 'flex-end', 
          border: 1, 
          borderRadius: '0.5rem',
          borderColor: 'inherit', 
          borderColor: 'rgb(229, 231, 235)'}}>
          <PermIdentityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" placeholder="Username" variant="standard" />
        </Box>
        <Box sx={{ 
          backgroundColor: 'rgb(226 232 240)',
          paddingLeft: 2,
          width: '50%',
          display: 'flex', 
          alignItems: 'flex-end', 
          border: 1, 
          borderRadius: '0.5rem', 
          borderColor: 'inherit', 
          borderColor: 'rgb(229, 231, 235)'}}>
          <LockOpenIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" placeholder="Password" variant="standard" />
        </Box>

        <Button variant="contained" className='w-1/2 h-9 bg-black rounded-lg' >NEXT</Button>

        <p><a className='font-bold'href='#'>Login</a> With Others</p>

        <Button variant="outlined" className='w-1/2 h-9 rounded-lg border-slate-400 text-black' startIcon={<GoogleIcon />}>
          Login with <a href='#' className='font-bold'> google</a></Button> 
        <Button variant="outlined" className='w-1/2 h-9 rounded-lg border-slate-400 text-black' startIcon={<FacebookIcon />}>
          Login with <a href='#' className='font-bold'> facebook</a></Button>
      </div>
    </>
  )
}