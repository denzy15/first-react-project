import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import { setProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.userId;
	if (!profileId) {
		profileId = 2;
	}
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId)
      .then((response) => {
        this.props.setProfile(response.data);
      });
  }
  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setProfile })(
  withRouter(ProfileContainer)
);
