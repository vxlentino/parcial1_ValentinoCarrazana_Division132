const arrayUsuarios = JSON.parse(jsonUsuarios);

localStorage.setItem("usuariosGuardados", JSON.stringify(arrayUsuarios));

const usuariosRecuperados = JSON.parse(localStorage.getItem("usuariosGuardados"));
console.table(usuariosRecuperados);

const tituloUsers = document.getElementById("titulo-users");
const contenedor = document.getElementById("users-container");

tituloUsers.addEventListener("click", () => {
    let htmlTabla = `
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
    `;

    usuariosRecuperados.forEach(user => {
        const{username, name, email}= user;
        
        const partesNombre = name.split(" ");
        const firstName = partesNombre[0];
        const lastName = partesNombre.slice(1).join(" ") ||"";

        htmlTabla += `
            <tr>
                <td><input type="checkbox"></td>
                <td><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" style="width:25px"></td>
                <td class="color-primario">${username}</td>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${email}</td>
            </tr> 
        `;
    });

    htmlTabla += `
            </tbody>
        </table>
    `;

    contenedor.innerHTML = htmlTabla;

})