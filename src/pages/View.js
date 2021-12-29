import React, { useState, Fragment } from 'react';
import { useVcard } from '../core/context/Vcard/VcardContext';
import NavbarHome from '../components/NavbarHome';
import HashtagList from '../components/HashtagList';
import LinkList from '../components/LinkList';
import Modal from '../components/Modal';
import { formatePhone, getDate } from '../core/utils/utils';

function Home() {
    const [ showModal, setShowModal ] = useState(false);

    const { vcardFields, defaultUserpic } = useVcard();

    const { 
        userpic,
        hashtags,
        user_name,
        title,
        description,
        website_url,
        show_links,
        link1_url,
        link1_name,
        link2_url,
        link2_name,
        show_social,
        instagram_url,
        facebook_url,
        tiktok_url,
        youtube_url,
        vk_url,
        phone,
        show_whatsapp,
        show_viber,
        tg_username,
        twitter_username,
        odnoklassniki_username,
        email,
        hide_footer
    } = vcardFields;

    const avatar = userpic || defaultUserpic;
    
    const copyrightText = hide_footer
        ? null
        : (<span>&nbsp;<a href="https://google.com/" className="footer__copyright-link">Demo.Ru</a></span>);

    const formattedPhone = formatePhone(phone);
    const time = getDate( new Date() );

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

    if ( !Object.keys(vcardFields) || !Object.keys(vcardFields).length ) {
        return null;
    } else {
        return (
            <Fragment>
                <div className="sidebar collapse">
                    <NavbarHome />
                </div>
                <div className="app__wrapper">
                    <div className="container">
                        <header>
                            <div className="app__alert-wrapper hidden">
                                <div className="alert alert-danger app__alert fade in">
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    { description }
                                </div>
                            </div>
                        </header>
                        <div className="row">
                            <div className="col-sm-6 col-lg-7 hidden-xs">
                                <div className="profile">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img    className="profile__avatar"
                                                    src={`${ avatar }`} 
                                                    alt="Фото" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="profile__description">
                                                {
                                                    user_name
                                                    ?   <div className="field__wrapper field__wrapper_sm">
                                                            <h1 className="field field_nowrap profile__name">{ user_name }</h1>
                                                        </div>
                                                    : null
                                                }
                                                {
                                                    title
                                                    ?   <div className="field__wrapper field__wrapper_sm">
                                                            <h2 className="field field_nowrap profile__profession">{ title }</h2>
                                                        </div>
                                                    : null
                                                }
                                                {
                                                    description
                                                    ?   <div className="field__wrapper field__wrapper_md">
                                                            <p className="field profile__introtext">{ description }</p>
                                                        </div>
                                                    : null
                                                }
                                                {
                                                    hashtags.length
                                                    ?   <div className="field__wrapper field__wrapper_sm profile__tag-wrapper">
                                                            <div className="field profile__tag-list">
                                                                <HashtagList hashtags={ hashtags } />
                                                            </div>
                                                        </div>
                                                    : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        website_url
                                        ?   <span className="profile__link profile__link_website">Мой вебсайт</span>
                                        : null
                                    }
                                    <div className="profile__fast-links">
                                        <LinkList show_links={ show_links } link1_url={ link1_url } link1_name={ link1_name } link2_url={ link2_url } link2_name={ link2_name } />
                                    </div>
                                    <span className="profile__link profile__link_social">Мои соц. сети</span>
                                    {
                                        phone && phone.length
                                        ?   <span className="profile__link profile__link_telephone">Позвонить</span>
                                        : null
                                    }
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-5">
                                <div className="iphone__block">
                                    <div className="iphone__corpus-wrapper">
                                        <div className="iphone__btn iphone__btn-mute"></div>
                                        <div className="iphone__btn iphone__btn-plus"></div>
                                        <div className="iphone__btn iphone__btn-minus"></div>
                                        <div className="iphone__btn iphone__btn-power"></div>
                                        <div className="iphone__corpus">
                                            <div className="iphone__line iphone__line-top"></div>
                                            <div className="iphone__line iphone__line-bottom"></div>
                                            <div className="iphone__line iphone__line-left"></div>
                                            <div className="iphone__line iphone__line-right"></div>
                                            <div className="iphone__corpus-blik">
                                                <div className="iphone__corpus-inner">
                                                    <div className="iphone__screen-wrapper">
                                                        <div id="iphoneBg" className="iphone__screen bg-img">
                                                            <div className="iphone__screen-content">
                                                                <div className="iphone__top-area">
                                                                    <div className="iphone__dinamic"></div>
                                                                    <div className="iphone__camera"></div>
                                                                </div>
                                                                <div id="iphoneTime" className="iphoneTime iphone__clock hidden-xs">{ time }</div>
                                                                <div className="profile visible-xs" onClick={ handleShowModal }>
                                                                    <div className="row no-gutters">
                                                                        <div className="col-xs-5">
                                                                            <div className="profile__avatar bg-img">
                                                                            <img className="profile__avatar"
                                                                                src={`${ avatar }`} 
                                                                                alt="Фото" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-xs-7">
                                                                            <div className="profile__description">
                                                                                {
                                                                                    user_name
                                                                                    ?   <h1 className="field field_nowrap profile__name">{ user_name }</h1>
                                                                                    : null
                                                                                }
                                                                                {
                                                                                    title
                                                                                    ?   <h2 className="field field_nowrap profile__profession">{ title }</h2>
                                                                                    : null
                                                                                }
                                                                                {
                                                                                    description
                                                                                    ?   <p className="field profile__introtext">{ description }</p>
                                                                                    : null
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="iphone__widget-wrapper">
                                                                    { website_url
                                                                        ? <div className="iphone__widget iphone__website">
                                                                            <a href={`${ website_url }`} target="_blank" rel="nofollow noreferrer noopener noscript" className="iphone__widget-title iphone__website-title">{ website_url.replace(/^(http(s)?:\/\/)?(www\.)?/ig, '') }</a>
                                                                            <a href={`${ website_url }`} target="_blank" rel="nofollow noreferrer noopener noscript" className="btn btn-default iphone__website-btn">&ensp;<i className="fas fa-angle-right"></i>&ensp;</a>
                                                                        </div>
                                                                        : null
                                                                    }
                                                                </div>
                                                                <div className="profile__fast-links visible-xs">
                                                                    <LinkList show_links={ show_links } link1_url={ link1_url } link1_name={ link1_name } link2_url={ link2_url } link2_name={ link2_name } />
                                                                </div>
                                                                <div className="iphone__social">
                                                                    <div className="iphone__social-inner">
                                                                        {
                                                                            show_social && instagram_url
                                                                            ? <a href={`https://www.instagram.com/${ instagram_url }`} target="_blank" rel="nofollow noreferrer noopener noscript" className="iphone__social-item iphone__social-item_instagram">Instagram</a>
                                                                            : null
                                                                        }
                                                                        {
                                                                            show_social && facebook_url
                                                                            ? <a href={`https://www.facebook.com/${ facebook_url }`} target="_blank" rel="nofollow noreferrer noopener noscript" className="iphone__social-item iphone__social-item_facebook">Facebook</a>
                                                                            : null
                                                                        }
                                                                        {
                                                                            show_social && youtube_url
                                                                            ? <a href={`https://www.youtube.com/${ youtube_url }`} target="_blank" rel="nofollow noreferrer noopener noscript" className="iphone__social-item iphone__social-item_youtube">YouTube</a>
                                                                            : null
                                                                        }
                                                                        {
                                                                            show_social && vk_url
                                                                            ? <a href={`https://vk.com/${ vk_url }`} target="_blank" rel="nofollow noreferrer noopener noscript" className="iphone__social-item iphone__social-item_vk">ВКонтакте</a>
                                                                            : null
                                                                        }
                                                                        {
                                                                            show_whatsapp && phone && phone.length > 10
                                                                            ? <a href={`https://wa.me/${ phone.replace(/[+|\s|(|)|-]+/gi, '') }`} target="_blank" rel="nofollow noreferrer noopener noscript" className="iphone__social-item iphone__social-item_whatsapp">WhatsApp</a>
                                                                            : null
                                                                        }
                                                                        {
                                                                            show_viber && phone && phone.length > 10
                                                                            ? <a href={`viber://chat?number=%2B${ phone.replace(/[+|\s|(|)|-]+/gi, '') }`} target="_blank" rel="nofollow noreferrer noopener noscript" className="iphone__social-item iphone__social-item_viber">Viber</a>
                                                                            : null
                                                                        }
                                                                        {
                                                                            show_social && tg_username
                                                                            ? <a href={`https://telegram.me/${ tg_username }`} target="_blank" rel="nofollow noreferrer noopener noscript" className="iphone__social-item iphone__social-item_telegram">Telegram</a>
                                                                            : null
                                                                        }
                                                                        {
                                                                            show_social && tiktok_url
                                                                            ? <a href={`https://www.tiktok.com/${ tiktok_url }`} target="_blank" rel="nofollow noreferrer noopener noscript" className="iphone__social-item iphone__social-item_tiktok">TikTok</a>
                                                                            : null
                                                                        }
                                                                        { show_social && twitter_username
                                                                            ? <a href={`https://twitter.com/${ twitter_username }`} target="_blank" rel="nofollow noreferrer noopener noscript" className="iphone__social-item iphone__social-item_twitter">Twitter</a>
                                                                            : null
                                                                        }
                                                                        { show_social && odnoklassniki_username
                                                                            ? <a href={`https://ok.ru/profile/${ odnoklassniki_username }`} target="_blank" rel="nofollow noreferrer noopener noscript" className="iphone__social-item iphone__social-item_ok">ОК</a>
                                                                            : null
                                                                        }
                                                                    </div>
                                                                </div>
                                                                {
                                                                    phone && phone.length
                                                                    ?   <div className="iphone__widget-wrapper">
                                                                            <div className="iphone__widget iphone__widget_semitransparent iphone__call-block">
                                                                                <a href={`tel:${ phone }`} target="_blank" rel="nofollow noreferrer noopener noscript" id="phoneBlock" className="iphone__widget-title iphone__call-block-title">{ formattedPhone }</a>
                                                                                <a href={`tel:${ phone }`} target="_blank" rel="nofollow noreferrer noopener noscript" className="iphone__call-block-btn" aria-label="Позвонить"></a>
                                                                            </div>
                                                                        </div>
                                                                    : null
                                                                }
                                                                {
                                                                    email && email.length
                                                                    ? <a href={`mailto:${ email }`} rel="nofollow noreferrer noopener noscript" className="iphone__email"> <i className="fas fa-envelope"></i> { email }</a>
                                                                    : null
                                                                }

                                                                <div className="footer__copyright visible-xxs">
                                                                    &copy; <span id="footerYear1">{ new Date().getFullYear() }</span>
                                                                    { copyrightText }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="hidden-xxs">
                    <div className="footer">
                        <div className="footer__inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-7">
                                        <div className="footer__copyright">
                                            &copy; <span id="footerYear2">{ new Date().getFullYear() }</span>
                                            { copyrightText }
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                { showModal && (
                    <Modal onClose={ handleCloseModal }>
                        <div className="editor-form__section">
                            <div className="form-group">
                                <img src={`${ avatar }`} alt="Моё фото" className="avatar-editor__preview" />
                            </div>
                            {
                                user_name
                                ?   <div className="form-group">
                                        <h1 className="profile__name">{ user_name }</h1>
                                    </div>
                                : null
                            }
                            {
                                title
                                ?   <div className="form-group">
                                        <h2 className="profile__profession">{ title }</h2>
                                    </div>
                                    : null
                            }
                            {
                                description
                                ?   <div className="form-group">
                                        <p className="profile__introtext profile__introtext_full">{ description }</p>
                                    </div>
                                : null
                            }
                            {
                                hashtags.length
                                ?   <div className="form-group">
                                        <HashtagList hashtags={ hashtags } />
                                    </div>
                                : null
                            }
                        </div>
                    </Modal>
                ) }
            </Fragment>
        );
    }
}

export default Home;