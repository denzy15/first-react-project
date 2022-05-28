import c from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
	return (
		<div className={c.wrapper}>
			<div className={c.column_1}>
				<div className={c.avatar}>
					<img src="https://sun9-78.userapi.com/s/v1/if2/zZAFafVl1I0aAI5kXpC_LhsCG48Ym9rymz8f5ANYmCMSDYnkHRXuTZkNYDtR2U59BxWWl9U8Os-V7SwB_oKp_ThL.jpg?size=960x1280&quality=96&type=album" alt="profile_image" />
				</div>
				<div className={c.location}>{props.location}<img src="https://cdn-icons-png.flaticon.com/512/535/535188.png" alt="" /></div>
				<button className={c.edit}>Edit profile</button>
			</div>
			<div className={c.column_2}>
				<h2 className={c.userName}>{props.name}</h2>
				<p className={c.status}>{props.status} </p>
				<section className={c.userInfo}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint rem doloremque adipisci harum dolor, repudiandae est illum aspernatur esse nobis laudantium laboriosam, minus explicabo possimus quibusdam consequatur debitis quo ipsam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum sunt quis optio molestias libero facilis, voluptatibus ducimus nesciunt enim aspernatur atque voluptatum fugit sed perferendis consequatur eius natus deleniti!
				</section>
			</div>
		</div>
	)
}

export default ProfileInfo