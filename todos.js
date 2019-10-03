const seleniumInfra = require("./seleniumInfra")
const sele = new seleniumInfra()

class TodosPage {

    constructor(URL) {
        sele.getURL(URL)
    }

    //---------------------------------------------------------------------------------------------------------------------------------------------    

    async insertAndDelete(todoText) {
        let element, elementText

        try {

            await sele.write(todoText, "id", "todo-input")
            await sele.clickElement("id", "addToDo")
            console.log("ckicked the add button ")
            element = await sele.findElementBy("xpath", " //*[@id='todos']/div[1] ")
            elementText = await sele.getTextFromElement(null, null, element)

            if (sele.isElementExists("xpath", " //*[@id='todos']/div[1] ")) {
                console.log("found a new div ")
                if (elementText == todoText) {
                    console.log("New div has the same text");
                } else {
                    console.log("Error: New div does not has the same text");
                }
            } else {
                console.log("Error: Can’t find a new div");
            }

            await sele.clickElement("className", "delete")

            if (sele.isElementExists("xpath", " //*[@id='todos']/div[1] ")) {
                console.log("“The div was deleted”");
            } else {
                console.log("“The div was not deleted”");
            }
        }

        catch (error) {
            console.log("got error in insertAndDelete method " + error)
        }

        await sele.close()
    }



    //---------------------------------------------------------------------------------------------------------------------------------------------    

    async  insertAndComplete(todoText) {

        

        try {

            await sele.write(todoText, "id", "todo-input")
            await sele.clickElement("id", "addToDo")
            console.log("ckicked the add button ")

            if (sele.isElementExists("xpath", " //*[@id='todos']/div[1] ")) {
                console.log("found a new div ")
            } else {
                console.log("Error: Can’t find a new div");
            }

            await sele.clickElement("className", "fa-check-circle")

            if (sele.isElementExists("className", " complete")) {
                console.log("the new div was checked”, otherwise ");
            } else {
                console.log("Error: the new div was NOT checked");
            }
        }

        catch (error) {
            console.log("got error in insertAndComplete method " + error)
        }
        await sele.close()

    }


    //---------------------------------------------------------------------------------------------------------------------------------------------    

    async  insertTwoDeleteFirst(todoText1, todoText2) {

        try {

            await sele.write(todoText1, "id", "todo-input")
            await sele.clickElement("id", "addToDo")
            console.log("ckicked the add button ")

            await sele.write(todoText2, "id", "todo-input")
            await sele.clickElement("id", "addToDo")
            console.log("ckicked the add button ")

            if (sele.isElementExists("xpath", " //*[@id='todos']/div[1] ")) {
                console.log("found a new div ")
            } else {
                console.log("Error: Can’t find a new div");
            }

            if (sele.isElementExists("xpath", " //*[@id='todos']/div[2] ")) {
                console.log("found a new div ")
            } else {
                console.log("Error: Can’t find a new div");
            }

            await sele.clickElement("className", "delete")

            if (sele.isElementExists("xpath", " //*[@id='todos']/div[2] ")) {
                console.log("“The div was deleted”");
            } else {
                console.log("“The div was not deleted”");
            }

        } catch (error) {
            console.log("got error in insertTwoDeleteFirst method " + error)
        }
        await sele.close()
    }


}

module.exports = TodosPage

