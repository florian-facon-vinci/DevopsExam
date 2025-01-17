import { Main } from "../src/passwordChecker";

describe("password is available", function (){

    let main = new Main();

    it("Test contains at least 8 characters ",function (){
        
        const password = "12345678"
        const result = main.passwordChecker(password);

        expect(result).toBe(true);
    });

    


});

