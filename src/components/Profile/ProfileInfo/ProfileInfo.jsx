import Preloader from "../../common/Preloader/Preloader";
import c from "./ProfileInfo.module.css";
import noPhoto from '../../../assets/images/149071.png'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={c.wrapper}>
      <div className={c.column_1}>
        <div className={c.avatar}>
          <img src={props.profile.photos.large != null ? props.profile.photos.large : noPhoto} alt="profile_image" />
        </div>
        <button className={c.edit}>Edit profile</button>
      </div>
      <div className={c.column_2}>
        <h2 className={c.userName}>{props.profile.fullName}</h2>
        <p className={c.status}>{props.profile.aboutMe} </p>
        <section className={c.info_card}>
          <h3 className={c.info_card_title }>My contacts</h3>
          {Object.entries(props.profile.contacts).map(([sn, link]) => {
            if (link) {
              return (
                <div className={c.contacts_link}>
                  <a target="_blank" rel="noopener noreferrer" href={link}>
                    {sn}
                  </a>
                </div>
              );
            }
          })}
        </section>
      </div>
    </div>
  );
};

export default ProfileInfo;
