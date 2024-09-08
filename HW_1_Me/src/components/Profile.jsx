import me from "../assets/me.jpg"

export const Profile = () => {
    return(
    <>
    <section>
        <h2>About me</h2>
        <img
            src={me}
            alt="My Photo"
            className="profile-photo"
        />
        <p><strong>ФИО:</strong> Земан Артур Олегович</p>
        <p><strong>Телефон:</strong> +380983638230</p>
        <p><strong>Email:</strong> zemanarthur@gmail.com</p>
        <p><strong>Город проживания:</strong> Одесса</p>
    </section>
    </>)
};