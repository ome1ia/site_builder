import { Link } from 'react-router-dom';
import { EDIT_PATH } from '../core/variables';

export default function NavbarHome() {
    return (
        <div className="sidebar__btn-group">
            <div className="container">
                <Link to={ EDIT_PATH } className="sidebar__btn sidebar__btn-settings" title="Настройки">
                    <i className="fas fa-cog spinner"></i>
                </Link>
            </div>
        </div>
    )
}
