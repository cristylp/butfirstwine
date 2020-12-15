import { Toast } from 'react-bootstrap'
import logo from './logo.png'

const Message = ({ show, toastText, handleToast }) => {
    return (
        <Toast show={show} onClose={() => handleToast(false)} delay={3000} autohide style={{ position: 'fixed', top: 85, right: 30, width: 300 }}>
            <Toast.Header>
                <img src={logo} className="rounded mr-2" alt="" style={{ width: 20, height: 20 }} />
                <strong className="mr-auto">New wine added to favorites!</strong>
            </Toast.Header>
            <Toast.Body>{toastText}</Toast.Body>
        </Toast>
    )
}

export default Message