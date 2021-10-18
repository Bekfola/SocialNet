import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user-icon.jpg';
import styles from './users.module.css';

let Users = (props) => {

    let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
 
return (
    <div>
        <div>
            {
                pages.map(p => {
                    return (<span className={(props.currentPage === p && styles.selectedPage) + ' ' + styles.page}
                    onClick={() => {props.onPageClick(p)}}>{p}</span>)
                })
            }

           
        </div>

    {
        props.users.map(u => <div className={styles.user} key={u.id}>
            <div className={styles.leftSide}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.followed 
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
            </div>
            <div className={styles.rightSide}>
                <div>
                    <div>{u.id}</div>
                    <div className={styles.uName}>{u.name}</div>
                </div>
                <div>
                    <div>{u.status}</div>                   
                </div>
            </div>
            <div className={styles.superRightSide}>
                <div>
                    <div className={styles.geo}>{'u.location.country'}</div>
                    <div className={styles.geo}>{'u.location.city'}</div>  
                </div>
            </div>
        </div>)
    }
    </div>
)
}
export default Users;