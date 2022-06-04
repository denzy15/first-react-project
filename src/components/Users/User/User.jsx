import c from './User.module.css'
import React from 'react'

const User = (props) => {
	return (
    <div className={c.user}>
		<div className={c.left}>
			<img src='' alt=''/>
		</div>
		<div className={c.body}>
			<div className={c.fullName}>{props.fullName}</div>
			<div className={c.status}>{props.status}</div>
			<div>{props.users.followed ? <button>unfollow</button> : <button>follow</button>}</div>
		</div>
    </div>
	)
}

export default User