import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
    <div>
		<ProfileInfo name='Daniil Mirshanov' status='Татары в моде при любой погоде))' location='Almaty, Kazakhstan'/>
		<MyPostsContainer />
    </div>
	)
}

export default Profile;