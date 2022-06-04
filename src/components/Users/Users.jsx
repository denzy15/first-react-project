import React from "react";
import c from "./Users.module.css"
import userImg from "./../../assets/images/149071.png";

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
            <div className={c.ava_wrapper}>
              <img src={userImg} alt="ava" className={c.user_img} />
            </div>
            <div className={c.body}>
              <h3 className={c.fullName}>{u.name}</h3>
              <div className={c.status}>Some status...</div>
              <div className={c.follow_buttons}>
                {u.followed ? (
                  <button
                    className={c.followed}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={c.unfollowed}
                    onClick={() => {
                      props.follow(u.id);
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
