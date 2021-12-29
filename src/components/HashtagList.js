import { Fragment } from 'react';

function HashtagList(props) {
    const { hashtags } = props;

    return (
        <Fragment>
            { hashtags.map( ( hashtag, id ) => (<span key={ id } className="profile__tag">{ hashtag }</span>) ) }
        </Fragment>
    );
};
  
export default HashtagList;