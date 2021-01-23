import Users from '../entities/Users.js';

async function createUser(user){
    return await Users.create(user);
}

async function getUser(){
    return await Users.findAll();
}

async function getUserById(id){
    return await Users.findByPk(id);
}

async function updateUser(id, user){
    if (parseInt(id) !== user.UserId){
        console.log("Entity id diff");
        return;
    }

    let updateEntity = await getUserById(id);

    if (!updateEntity){
        console.log("There isn't a user with this id");
        return;
    }

    return await updateEntity.update(user);
}

async function deleteUser(id){
    let deleteEntity = await getUserById(id);

    if (!deleteEntity){
        console.log("There isn't a user with this id");
        return;
    }

    return await deleteEntity.destroy();
}

export {getUser, getUserById, createUser, updateUser, deleteUser};