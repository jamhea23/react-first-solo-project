import pic from "../assets/profile-pic.png";
export default function Info() {
  return (
    <div className="info">
      <img src={pic} className="info-pic" alt="profile pic" />
      <h1>Laura Smith</h1>
      <p>Frontend Developer</p>
      <span>laurasmith.website</span>
      <section className="info-buttons">
        <button className="info-button">
          <i class="fa-solid fa-envelope"></i>
          Email
        </button>
        <button className="info-button">
          <i class="fa-brands fa-linkedin"></i>
          Linkedin
        </button>
      </section>
    </div>
  );
}
