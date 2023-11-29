
export let LogIn = false;

export function bypassLogin(bypass){
    LogIn = bypass;
}

export function login(bypass) {
    // Perform authentication logic...
    // Assume successful authentication for demonstration purposes
    LogIn = bypass;
    console.log(login);
  }
  
  export function logout() {
    // Perform logout logic...
    LogIn = false;
  }

  export function GetStatusAuth(){
    if(LogIn){
        return true;
    }
    else{
        return false;
    }
  }
  