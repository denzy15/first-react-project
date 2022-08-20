import React from "react";
import c from "./Users.module.css";
import userImg from "./../../assets/images/149071.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
  let pagesTotalCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= (15 <= pagesTotalCount ? 15 : pagesTotalCount); i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={c.pageNumbers}>
        {pages.map((p) => {
          return (
            <span
              onClick={() => {
                props.onPageChange(p);
              }}
              className={props.currentPage === p && c.selectedPage}
            >
              {` ${p} `}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div className={c.user}>
            <NavLink to={"/profile/" + u.id}>
              <div className={c.ava_wrapper}>
                <img
                  src={u.photos.small != null ? u.photos.small : userImg}
                  alt="ava"
                  className={c.user_img}
                />
              </div>
            </NavLink>
            <div className={c.body}>
              <h3 className={c.fullName}>
                <NavLink to={"/profile/" + u.id}>{u.name}</NavLink>
              </h3>
              <div className={c.status}>Some status...</div>
              <div className={c.follow_buttons}>
                {u.followed ? (
                  <button
                    disabled={props.followProgress.some((id) => id === u.id)}
                    className={c.followed}
                    onClick={() => {
                      props.toggleIsFollowing(true, u.id);
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "d68fe94a-d200-4f86-a174-6339a8809400",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          }
                          props.toggleIsFollowing(false, u.id);
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followProgress.some((id) => id === u.id)}
                    className={c.unfollowed}
                    onClick={() => {
                      props.toggleIsFollowing(true, u.id);
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "d68fe94a-d200-4f86-a174-6339a8809400",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          }
                          props.toggleIsFollowing(false, u.id);
                        });
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
