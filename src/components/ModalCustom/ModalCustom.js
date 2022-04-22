import { Container } from '@mui/material';
import Dialog from '@mui/material/Dialog';

const ModalCustom = ({handleClose, open , children}) => {
    return(
        <>
            <Dialog onClose={handleClose} open={open}>
              <Container>
                 {children}
              </Container> 
            </Dialog>
        </>
    )
}
export default ModalCustom