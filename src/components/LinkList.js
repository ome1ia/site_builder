import { Fragment } from 'react';

function LinkList(props) {
    const { show_links, link1_url, link1_name, link2_url, link2_name } = props;

    return (
        <Fragment>
            
            {
                show_links && link1_url && link1_name
                ?   <a href={`${ link1_url }`} target="_blank"  rel="nofollow noreferrer noopener noscript" className="btn btn-default profile__fast-link">{ link1_name }</a>
                : null
            }
            {
                show_links && link2_url && link2_name
                ?   <a href={`${ link2_url }`} target="_blank"  rel="nofollow noreferrer noopener noscript" className="btn btn-default profile__fast-link">{ link2_name }</a>
                : null
            }
        </Fragment>
    );
};
  
export default LinkList;