const faker = require('faker');

export class Factory {
    adminAccount() {
        return {
            id: 1,
            pseudo: "Administrator",
        }
    }

    userAccount() {
        return {
            id: 2,
            pseudo: "UserLambda38",
        }
    }

    userData = (userId) => (
        {
            id: userId,
            pseudo: faker.name.findName(),
        }
    )

    listUsers = () => (
        [
            this.adminAccount(),
            this.userAccount()
        ].concat(this.createListUsers())
    )

    createListUsers() {
        var count = 0
        // Here userId has to be superior or equal to 3 because of the predefined users admin / superuser
        var userId = 3
        var userList = []
        while (count <= 10) {
            userList.push(this.userData(userId))
            count++
            userId++
        }
        return userList
    }

    createIdea = (itemId) => (
        {
            id: itemId,
            name: faker.commerce.productName(),
            description: faker.lorem.paragraphs(),
            ownerId: 2,
        }
    )

    createListIdeas() {
        var itemList = []
        for (var itemId=1; itemId <= 20; itemId++) {
            itemList.push(this.createIdea(itemId))
        }

        return itemList
    }

    listIdeas = () => (
        this.createListIdeas()
    )
}