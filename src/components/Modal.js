import { Fragment, useRef } from "react"

export default function Modal(props) {
    const modalRef = useRef(null);
    const hideModal = (evt) => {
        if(evt.target && evt.target === modalRef.current) {
            props.onClose();
        }
    }
    return (
        <Fragment>
            <div className="fade modal-backdrop in show"></div>
            <div className="modal fade in" 
                role="dialog" 
                style={{ display: 'block'}} 
                onClick={ hideModal } 
                ref={ modalRef }
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" 
                                className="close" 
                                onClick={ props.onClose } 
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                            { props.children }
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
