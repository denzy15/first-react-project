import c from './Music.module.css'
import Song from './Song/Song'


let Music = () => {
	return (
		<div className={c.musics}>
			<h1>My Music</h1>
			<Song name='MORGENSHTERN - Cadillac' duration='3:12'/>
			<Song name='Егор Крид - Грустно' duration='2:31'/>
			<Song name='PHARAOH - Акид' duration='3:49'/>
		</div>
	)
}

export default Music