import c from "./Setting.module.css";

const Settings = () => {
  return (
    <div className={c.settings}>
      <a href="#s">Main settings</a> <br />
      <a href="#s">Profile settings</a>
      <br />
      <a href="#s">Security</a>
      <br /> <a href="#s">Quit account</a>
      <br />
    </div>
  );
};

export default Settings;
