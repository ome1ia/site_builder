import { withFormik } from 'formik';
import validate from './validate';
import NavbarEditor from '../../components/NavbarEditor';
import UserpicEditor from '../../components/UserpicEditor';
import Input from '../../components/Input';
import HashtagInput from '../../components/HashtagInput';
import InputGroup from '../../components/InputGroup';
import Textarea from '../../components/Textarea';
import Checkbox from '../../components/Checkbox';
import Fieldset from '../../components/Fieldset';
import FieldsetPhone from '../../components/FieldsetPhone';
import Banner from '../../components/Banner';
import { formateUrl, getUserName, getYouTubeChannel } from '../utils/utils';

const VcardForm = props => {
    const {
        handleSubmit,
    } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <NavbarEditor accountUrl={ props.accountUrl } unsaved={ props.unsaved } setUnsaved={ props.setUnsaved } />
            <div className="editor-form">
                <div className="editor-form__container">
                    <div className="editor-form__section">
                        <div className="editor-form__header">Общая информация</div>
                        <UserpicEditor name="userpic" defaultUserpic={ props.defaultUserpic } />
                        <Input name="user_name" label="Ник или имя">
                            &nbsp;<a href="https://google.com" className="text-grey" title="Как заполнить ник или имя?" target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i></a>
                        </Input>
                        <Input name="title" label="Краткая информация">
                            &nbsp;<a href="https://google.com" className="text-grey" title="Как заполнить краткую информацию?" target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i></a>
                        </Input>
                        <Textarea name="description" label="Полное описание">
                            &nbsp;<a href="https://google.com" className="text-grey" title="Как заполнить полное описание?" target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i></a>
                        </Textarea>
                        <HashtagInput name="hashtag" label="Хэштеги (не более 3)" hashtags={ props.values.hashtags }>
                            &nbsp;<a href="https://google.com" className="text-grey" title="Как заполнить хэштеги?" target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i></a>
                        </HashtagInput>
                    </div>
                    <div className="editor-form__section">
                        <div className="editor-form__header">
                            Мой вебсайт
                            &nbsp;<a href="https://google.com" className="text-grey" title="Как заполнить мой вебсайт?" target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i></a>
                        </div>
                        <Input name="website_url" label="URL" />
                        { props.showBanner && <Banner /> }
                    </div>
                    <Fieldset label="Ссылки на ресурсы" name="show_links" helpLink="https://google.com">
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-4">
                                    <InputGroup name="link1_name" label="Текст кнопки">
                                        <span className="input-group-addon text-mars">1</span>
                                    </InputGroup>
                                </div>
                                <div className="col-sm-8">
                                    <InputGroup name="link1_url" label="URL на ресурс">
                                        <span className="input-group-addon text-mars">1</span>
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                            <div className="col-sm-4">
                                    <InputGroup name="link2_name" label="Текст кнопки">
                                        <span className="input-group-addon text-mars">2</span>
                                    </InputGroup>
                                </div>
                                <div className="col-sm-8">
                                    <InputGroup name="link2_url" label="URL на ресурс">
                                        <span className="input-group-addon text-mars">2</span>
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </Fieldset>
                    <Fieldset label="Мои соц. сети" name="show_social" helpLink="https://google.com">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <InputGroup name="vk_url" label="Логин ВКонтакте">
                                        <span className="input-group-addon"><i className="fab fa-vk"></i></span>
                                    </InputGroup>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <InputGroup name="facebook_url" label="Логин Facebook">
                                        <span className="input-group-addon"><i className="fab fa-facebook-f"></i></span>
                                    </InputGroup>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <InputGroup name="instagram_url" label="Логин Instagram">
                                        <span className="input-group-addon"><i className="fab fa-instagram"></i></span>
                                    </InputGroup>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <InputGroup name="youtube_url" label="Канал YouTube">
                                        <span className="input-group-addon"><i className="fab fa-youtube"></i></span>
                                    </InputGroup>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <InputGroup name="tiktok_url" label="Логин TikTok">
                                        <span className="input-group-addon"><i className="fab fa-tiktok"></i></span>
                                    </InputGroup>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <InputGroup name="tg_username" label="Логин Telegram">
                                        <span className="input-group-addon"><i className="fab fa-telegram-plane"></i></span>
                                    </InputGroup>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <InputGroup name="twitter_username" label="Логин Twitter">
                                        <span className="input-group-addon"><i className="fab fa-twitter"></i></span>
                                    </InputGroup>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <InputGroup name="odnoklassniki_username" label="Логин Одноклассники">
                                        <span className="input-group-addon"><i className="fab fa-odnoklassniki"></i></span>
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </Fieldset>
                    <div className="editor-form__section">
                        <div className="editor-form__header">
                            Email
                            &nbsp;<a href="https://google.com" className="text-grey" title='Как заполнить "Email"?' target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i></a>
                        </div>
                        <Input name="email" label="Email" hiddenLabel="1" />
                    </div>
                    <FieldsetPhone 
                        label="Телефон" 
                        name="phone" 
                        helpLink="https://google.com" 
                        relatedFields={['show_whatsapp', 'show_viber']}
                    >
                        <div className="form-group">
                            <div className="row">
                                <div className="col-xs-8 col-md-4">
                                    <label className="editor-form__label"><i className="fab fa-whatsapp"></i> Whatsapp</label>
                                </div>
                                <div className="col-xs-4 col-md-8">
                                    <Checkbox name="show_whatsapp" fieldClasses=" checkbox-toggler_pad-top editor-form__toggler-phone" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-xs-8 col-md-4">
                                    <label className="editor-form__label"><i className="fab fa-viber"></i> Viber</label>
                                </div>
                                <div className="col-xs-4 col-md-8">
                                    <Checkbox name="show_viber" fieldClasses=" checkbox-toggler_pad-top editor-form__toggler-phone" />
                                </div>
                            </div>
                        </div>
                    </FieldsetPhone>
                    <Fieldset label="Не показывать надпись в подвале сайта" name="hide_footer" helpLink=""></Fieldset>
                    <div className="editor-form__section">
                        <div className="editor-form__header">Обратная связь</div>
                        <div className="form-group">
                            <small><a href="https://google.com" target="_blank" rel="noreferrer"><i className="fas fa-info-circle"></i> Как правильно заполнить все данные?</a></small>
                        </div>
                        <div className="form-group">
                            <a href="https://google.com" className="btn btn-text-primary" target="_blank" rel="noreferrer">СООБЩИТЬ ОБ ОШИБКЕ</a>
                        </div>
                        <div className="form-group">
                            <a href="https://google.com" className="btn btn-text-primary" target="_blank" rel="noreferrer">ПРЕДЛОЖИТЬ УЛУЧШЕНИЕ</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

const VcardEditForm = withFormik({
    mapPropsToValues: (props) => { 
        const values = Object.assign({}, props.values);

        if(!values.userpic) {
            values.userpic = props.defaultUserpic;
        }
        values.hashtag = '';
        return values;
    },
    mapPropsToErrors: (props) => {
        const errors = Object.assign({}, props.errors);
        return errors;
    },
    mapPropsToTouched: (props) => {
        const touched = {};
        for(let key in props.errors) {
            touched[key] = true;
        }
        return touched;
    },
    validate: validate,
    handleSubmit: (values, { props, setSubmitting, setValues }) => {
        setSubmitting(false);
        const initialValues = Object.assign({}, props.values);
        const newValues = Object.assign({}, values);

        if(newValues.website_url) {
            newValues.website_url = formateUrl(newValues.website_url);
        }

        if ( newValues.show_links ) {
            if(newValues.link1_url) {
                newValues.link1_url = formateUrl(newValues.link1_url);
            }
            if(newValues.link2_url) {
                newValues.link2_url = formateUrl(newValues.link2_url);
            }
        } else {
            if(newValues.link1_url) {
                delete newValues.link1_url;
            }
            if(newValues.link2_url) {
                delete newValues.link2_url;
            }
            if(newValues.link1_name) {
                delete newValues.link1_name;
            }
            if(newValues.link2_name) {
                delete newValues.link2_name;
            }
        }
        
        if ( newValues.show_social ) {
            if(newValues.vk_url) {
                newValues.vk_url = getUserName(newValues.vk_url);
            }
            if(newValues.facebook_url) {
                newValues.facebook_url = getUserName(newValues.facebook_url);
            }
            if(newValues.instagram_url) {
                newValues.instagram_url = getUserName( newValues.instagram_url.replace(/(\/)?$/, '') );
            }
            if(newValues.youtube_url) {
                newValues.youtube_url = getYouTubeChannel(newValues.youtube_url);
            }
            if(newValues.tiktok_url) {
                newValues.tiktok_url = getUserName(newValues.tiktok_url);
            }
            if(newValues.tg_username) {
                newValues.tg_username = getUserName(newValues.tg_username);
            }
            if(newValues.twitter_username) {
                newValues.twitter_username = getUserName(newValues.twitter_username);
            }
            if(newValues.odnoklassniki_username) {
                newValues.odnoklassniki_username = getUserName(newValues.odnoklassniki_username);
            }
        } else {
            if(newValues.vk_url) {
                delete newValues.vk_url;
            }
            if(newValues.facebook_url) {
                delete newValues.facebook_url;
            }
            if(newValues.instagram_url) {
                delete newValues.instagram_url;
            }
            if(newValues.youtube_url) {
                delete newValues.youtube_url;
            }
            if(newValues.tiktok_url) {
                delete newValues.tiktok_url;
            }
            if(newValues.tg_username) {
                delete newValues.tg_username;
            }
            if(newValues.twitter_username) {
                delete newValues.twitter_username;
            }
            if(newValues.odnoklassniki_username) {
                delete newValues.odnoklassniki_username;
            }
        }

        if ( !newValues.phone ) {
            if(newValues.show_whatsapp) {
                newValues.show_whatsapp = '';
            }
            if(newValues.show_viber) {
                newValues.show_viber = '';
            }
        }

        const updatedValues = Object.assign(initialValues, newValues);
        return updatedValues;
    },
    displayName: 'VcardEditForm',
})(VcardForm);

export default VcardEditForm;
