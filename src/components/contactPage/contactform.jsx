import React from "react";
import {Button, Stack, Typography, Paper, Grid,  TextareaAutosize } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useRef } from "react";
import '../../App.css'

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6F7E8C',
      },
    },
  });
  
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: '#F3F6F9',
      border: '1px solid',
      borderColor: '#E0E3E7',
      fontSize: 16,
     
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
      ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
        borderColor: '#2D3843',
      }),
    },
  }));
  
  
  
const ContactForm = () => {
    const fileInputRef = useRef();

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log('Selected files:', files);
    // You can store files in state or upload them here
  };
  return (
    <>
     <Paper elevation={3} sx={{ p: 3, margin: "auto" }} className="Contactform">
     <Grid container spacing={1} justifyContent="center">
      <Grid md={5} sm={12} xs={12} className="ContactFormLeft">
         <Typography variant="h3">
            Social Media
         </Typography>
         <Grid md={10} sm={12} xs={12} className="FormCards">
            <Typography className="formCardsList">
               <TwitterIcon sx={{color:'#2176B9', fontSize:'30px'}}/> Noe_Rempel30
            </Typography>
         </Grid>
         <Grid md={10} sm={12} xs={12} className="FormCards">
            <Typography className="formCardsList">
               <FacebookIcon sx={{color:'#2176B9', fontSize:'30px'}}/> Noe_Rempel30
            </Typography>
         </Grid>
         <Grid md={10} sm={12} xs={12} className="FormCards">
            <Typography className="formCardsList">
               <InstagramIcon sx={{color:'#2176B9', fontSize:'30px'}} />Noe_Rempel30
            </Typography>
         </Grid>
         <Grid md={10} sm={12} xs={12} className="FormCards">
            <Typography className="formCardsList">
               <YouTubeIcon sx={{color:'#2176B9', fontSize:'30px'}} />Noe_Rempel30
            </Typography>
         </Grid>
     </Grid>
     <Grid md={7} sm={12} xs={12} className="ContactFormRight">
        <Typography variant="h3">
            Stay Connected
        </Typography>
       <Grid md={12} sm={12} xs={12}>
        <Box component="form" noValidate sx={{ display: 'grid'}} className="FormFields">
         <FormControl variant="standard" className="formFieldsInner">
           <InputLabel shrink htmlFor="bootstrap-input">
             Your Name
            </InputLabel>
              <BootstrapInput id="bootstrap-input" />
          </FormControl>
         </Box>
        </Grid>
        <Grid md={12} sm={12} xs={12}>
        <Box component="form" noValidate sx={{ display: 'grid'}} className="FormFields">
         <FormControl variant="standard" className="formFieldsInner">
           <InputLabel shrink htmlFor="bootstrap-input">
             Your Email
            </InputLabel>
              <BootstrapInput id="bootstrap-input" />
             
          </FormControl>
         </Box>
        </Grid>
        <Grid md={12} sm={12} xs={12}>
        <Box component="form" noValidate sx={{ display: 'grid'}} className="FormFields">
         <FormControl variant="standard" className="formFieldsInner">
           <InputLabel shrink htmlFor="bootstrap-input">
             Your Message
            </InputLabel>
            <TextareaAutosize id="FormTextArea" aria-label="minimum height" minRows={6}/>
          </FormControl>
         </Box>
        </Grid>
        <Grid md={12} sm={12} xs={12} className="FormBtn" sx={{textAlign:'left'}}>
        <Box>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <AttachFileIcon sx={{ color: '#3b82f6' }} />
        <Typography
          variant="body1"
          sx={{
            textDecoration: 'underline',
            color: '#fff',
            cursor: 'pointer',
            '&:hover': { color: '#3b82f6' },
          }}
          onClick={handleFileClick}
        >
          Attach Files
        </Typography>
        <input
          type="file"
          hidden
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </Stack>

      <Button
        variant="contained"
        sx={{
          borderRadius: '9999px',
          backgroundColor: '#3b82f6',
          textTransform: 'none',
          width:'150px',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: '#2563eb',
          },
        }}
      >
        Submit
      </Button>
    </Box>
        </Grid>
      </Grid>
      </Grid>
    </Paper>
    </>
  );
};

export default ContactForm;
