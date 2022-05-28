import c from './Post.module.css'

const Post = (props) => {
	return (
    <div className={c.item}>
		<a href='#s' className={c.user}>
			<img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" alt="" srcset="" />
			<span className={c.name}>{props.name}</span>
		</a>
		<div className={c.post}>
			<p>{props.message}</p>
		</div>
		<div  className={c.like}>
			<a href="#s"><img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="like" srcset="" /></a>
			<span>{props.likes}</span>
		</div>
		
    </div>
	)
}

export default Post;