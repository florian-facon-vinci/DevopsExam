export class Main{

    passwordChecker(password){
        if(password.length >= 8){
            return true;
        }
     
        const special = /[!@#$%^&*(),.?":{}|<>]/;
        if (special.test(password)) {
            return true;
        }
        return false;
    }
}


