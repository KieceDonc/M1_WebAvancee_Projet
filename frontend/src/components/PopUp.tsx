import React, { useEffect } from 'react'
import Modal from '@mui/material/Modal'
import './Popup.css'
import { Button } from '@mui/material'

const Popup = (props) => {
  const [open, setOpen] = React.useState<boolean>(props.show)

  useEffect(() => {
    setOpen(props.show)
  }, [props.show])
  
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    props.onSort(false)
    setOpen(false)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal">
        <div className="paper">
          <h2 id="simple-modal-title">{props.text}</h2>
        </div>
      </Modal>
    </div>
  )
}

export default Popup
