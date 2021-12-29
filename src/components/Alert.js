import { useRef, useEffect } from 'react';

export default function Alert(props) {
    const cls = ['alert', 'app__alert', 'fade', 'in'];
    if(props.success) {
        cls.push('alert-success')
    } else {
        cls.push('alert-danger');
    }

    const alertRef = useRef(null);

    const handleHideAlert = (evt) => {
        if( evt.target && evt.target !== alertRef ) {
            props.onClose();
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleHideAlert);
        return () => {
            document.body.removeEventListener('click', handleHideAlert);
        };
    }, [])
    
    return (
        <div ref={ alertRef } className="app__alert-wrapper">
            <div className={ cls.join(' ') }>
                <button type="button" className="close" aria-label="Close" onClick={ props.onClose }><span aria-hidden="true">×</span></button>
                { props.children }
            </div>
        </div>
    )
}
