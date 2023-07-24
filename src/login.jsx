import React from 'react'
import "./login.css"
const Login=()=> {
   return (
    <div class="main">
        <img src="images/image-1.webp" class="image-1" />
        <div class="account"></div> 
        <form action="register" method="post">
            <h2>NEW ACCOUNT?</h2>
            <br/>
            <div class="input">
            <span class="form-icon"><ion-icon name="person-outline"></ion-icon></span>
            <input type="text" class="form-control" placeholder="User name" />
            <br/>
            <span class="form-icon"><ion-icon name="call-outline"></ion-icon></span>
            <input type="text" class="form-control" placeholder="Phone Number"/>
            <br/>
             <span class="form-icon"><ion-icon name="mail-outline"></ion-icon></span>
            <input type="text" class="form-control" placeholder="Mail" />
            <br/>
             <span class="form-icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
            <input type="text" class="form-control" placeholder="Password"/>
            <br/>
             <span class="form-icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
            <input type="text" class="form-control" placeholder="Confirm Password"/>
            <br/>
            <br/><br/>
            <div class="btn"></div>
            <button>REGISTER</button>
            <img src="images/image-2.webp" class="image-2" />
            </div>
            <br/>
        </form>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </div>
    )
}
 export default Login
