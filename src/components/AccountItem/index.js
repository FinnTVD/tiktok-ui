import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b4f45ab45c999aac225a7322dc33237f~c5_300x300.webp?x-expires=1659686400&x-signature=iU0ETuyfzZB11K%2BJuMRSPdNckMw%3D"
                alt="Ngô Ngọc Hoà🦄"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>hoa_2309</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Ngô Ngọc Hoà🦄</span>
            </div>
        </div>
    );
}

export default AccountItem;
