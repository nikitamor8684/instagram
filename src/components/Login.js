import React from 'react';

function Login(){
    return(
<>

<div className='main'>
<div  className='newacc1' style={{height:'400px'}}>
<h4 style={{ fontFamily: "Lobster, cursive", margin:" 40px 60px"}}>Instagram</h4>
<input type='text' className='newacc_input'  placeholder='Phone Number,username or Email' /><br/><br/>
<input type='password' className='newacc_input'  placeholder='Password' /><br/><br/>
<button className='btn btn-primary' style={{width:'200px',marginLeft:'20px'}}>Log in </button><br/>
--------------------------OR------------------------------
<a href='https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522141wkivmzovhyni0cmy1i6lzfr1smiitoto2c675f3rg41y7dwl7%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D272b7a5f-e419-484e-acd5-23459213b3c9%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522141wkivmzovhyni0cmy1i6lzfr1smiitoto2c675f3rg41y7dwl7%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0'><button  style={{marginLeft:"34px"}} className='btn btn-primary'>Login with facebook</button></a><br/><br/>
<a href='forgot' style={{textDecoration:'none',marginLeft:'70px'}}>Forgot Password ?</a>

</div>

<div style={{marginLeft:'440px'}}>
    <a href='Newacc' style={{textDecoration:'none'}}>Create New account</a>
</div>
</div>
</>
)
}


export default Login;