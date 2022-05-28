import c from './Song.module.css'

let Song = (props) => {
	return (
	<div className={c.song}>
		<button className={c.play}>{'/>'}</button>
		<span className={c.name}>{props.name}</span> <br />
		<span className={c.duration}>{props.duration}</span>
	</div>
	)
}

export default Song