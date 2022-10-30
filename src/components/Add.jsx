
import styled from '@emotion/styled'
import { AddCircle } from '@mui/icons-material'
import { Avatar, Button, ButtonGroup, Fab,Modal, TextField, Tooltip, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});


const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
<Tooltip onClick ={e=>setOpen(true)}
      title="Add new photo"   sx={{position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 }, }}>
   <Fab color="primary" aria-label="add">
   <AddCircle/>
   </Fab>
</Tooltip>
<StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">

  <Box width={400} height={300} bgcolor={"background.default"} color="text.primary" p={3} borderRadius={5}>

   <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
 <UserBox>
  <Avatar src="https://images.pexels.com/photos/13624924/pexels-photo-13624924.jpeg?cs=srgb&dl=pexels-abderrahman-bouallal-13624924.jpg&fm=jpg&_gl=1*1suhzje*_ga*NTY2NTI0Nzg1LjE2NjY0Njc4ODg.*_ga_8JE65Q40S6*MTY2NjQ2Nzg4OS4xLjEuMTY2NjQ2ODE2OS4wLjAuMA.." alt="" sx={{width:30, height:30}}/>
 <Typography variant="span"> Kiranjeet</Typography>
 </UserBox>
 <TextField sx={{width:"100%"}} id="standard-multiline-static" multiline rows={3} placeholder="What's on your mind?"variant="standard" />
          
<Stack direction="row"  gap={1} mt={2} mb={3} >
        <EmojiEmotionsIcon color="primary"/>
        <ImageIcon color="secondary"/>
        <VideoCameraBackIcon color="success"/>
        <AddAPhotoIcon color="error"/>
</Stack>
<ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
      <Button>Post</Button>
      <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
</ButtonGroup>
</Box>
</StyledModal>
    </>
  )
}

export default Add
