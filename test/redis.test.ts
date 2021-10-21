import {UserData} from "@Redis";

describe("Redis Store", ()=> {
    let key :number = 1
    let data: object = {
        data:1
    }

    it("User data", () =>{
        UserData(key, data).then(val => {
            expect(val).toBe(JSON.stringify(data));
        })
    })


})