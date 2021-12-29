import React, { useState, useRef, useEffect } from 'react';
import { useField } from 'formik';
import Modal from './Modal';
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

function UserpicEditor(props) {
    const [ showModal, setShowModal ] = useState(false);

    const handleCloseModal = () => {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('modal-open');
        setShowModal(false);
    };
    const handleShowModal = () => {
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('modal-open');
        setShowModal(true);
    };

    const [ userpic, meta, helpers ] = useField(props.name);
    const { initialValue } = meta;
    const [ previousUserpic, setPreviousUserpic ] = useState(initialValue);
    const defaultUserpic = props.defaultUserpic;
    const { setValue: setUserpic } = helpers;

    const [cropper, setCropper] = useState(null);
    const cropperRef = useRef(null);

    const handleChangeUserpic = (evt) => {
        evt.preventDefault();

        let files;
        if (evt.dataTransfer) {
            files = evt.dataTransfer.files;
        } else if (evt.target) {
            files = evt.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setUserpic(reader.result);
            addCropper();
        };
        reader.readAsDataURL(files[0]);
    };

    const handleSaveChanges = () => {
        const data = getCropData();

        setUserpic(data);
        setPreviousUserpic(data);
        handleCloseModal();
    }

    const handleRevertChanges = () => {
        setUserpic(previousUserpic);
        handleCloseModal();
    }

    const handleDeleteUserpic = () => {
        setUserpic(defaultUserpic);
    }

    function getCropData () {
        if (cropper && cropper.getCroppedCanvas ) {
            const canvas = cropper.getCroppedCanvas({
					width: 220,
					height: 220,
				});
            return canvas.toDataURL();
        } else {
            return;
        }
    };

    const addCropper = () => {
        if (!cropperRef.current) {
            return;
        }

        removeCropper();
        
        const newCropper = new Cropper(cropperRef.current, {
            aspectRatio: 1,
            autoCropArea: 0.5,
        });
        setCropper(newCropper);
    }

    const removeCropper = () => {
        if (cropper) {
            cropper.destroy();
        }
    }

    useEffect(() => {
        if(showModal) {
            addCropper();
        } else {
            removeCropper();
        }
        return () => {
            // очистим подписки
            removeCropper();
        };
    }, [showModal])

    return (
        <div className="form-group">
            <div className="row">
                <div className="col-sm-4">
                    <label htmlFor="" className="editor-form__label hidden-xs">
                        Фото&nbsp;
                        <a href="https://webnames.ru/articles/kak_pravilno_zapolnit_dannye_v_konstruktore_personalnogo_sajta#slow-h2_1" className="text-grey" title="Как загрузить фото?" target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i></a>
                    </label>
                </div>
                <div className="col-sm-4">
                    <img src={`${ userpic.value }`} alt="Моё фото" className="avatar-editor__preview" />
                </div>
                <div className="col-sm-4">
                    <div className="avatar-editor__buttons">
                        <button className="btn btn-text-primary avatar-editor__btn" type="button" onClick={ handleShowModal }><i className="fas fa-pencil-alt"></i> Изменить</button>
                        <button className="btn btn-text-default avatar-editor__btn" type="button" onClick={ handleDeleteUserpic }><i className="fas fa-trash-alt"></i> Удалить</button>
                    </div>
                </div>
            </div>
            { showModal && (
                <Modal onClose={ handleRevertChanges }>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-7">
                            <p className="hidden-xs">&ensp;</p>
                            <div className="avatar-editor__wrapper">
                                <img id="avatar" src={`${ userpic.value }`} alt="Фото" className="js-field avatar-editor__img" ref={ cropperRef } />
                            </div>
                            <p className="hidden-xs">&ensp;</p>
                        </div>
                        <div className="col-sm-4">
                            <p className="hidden-xs">&ensp;</p>
                            <div id="userpicError"></div>
                            <div className="text-center">
                                <label className="btn btn-text-primary avatar-editor__btn" htmlFor="userpic" title="Загрузить">
                                    <input type="file" id="userpic" className="sr-only" name="userpic" accept=".jpg,.jpeg,.png,.bmp,.tiff" value="" onChange={ handleChangeUserpic } />
                                    <span>
                                        <span className="fas fa-upload"></span> Загрузить
                                    </span>
                                </label>
                                <button className="btn btn-primary avatar-editor__btn avatar-editor__btn_cropp" type="button"  data-dismiss="modal" onClick={ handleSaveChanges }><i className="fas fa-save"></i> Сохранить</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            ) }
        </div>
    );
}

export default UserpicEditor;