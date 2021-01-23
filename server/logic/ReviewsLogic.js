import Reviews from '../entities/Reviews.js';

async function createReview(review){
    return await Reviews.create(review);
}

async function getReview(){ 
    try{
        return await Reviews.findAll();
    }catch(e){
        console.log(e);
    }
    
}


async function getReviewById(id){
    try{
        return await Reviews.findByPk(id);
    }
    catch(e){
        console.log(e);
    }
    
}

async function updateReview(id, review){
    if (parseInt(id) !== review.ReviewId){
        console.log("Entity id diff");
        return;
    }

    let updateEntity = await getReviewById(id);

    if (!updateEntity){
        console.log("There isn't a review with this id");
        return;
    }

    return await updateEntity.update(review);
}

async function deleteReview(id){
    let deleteEntity = await getReviewById(id);

    if (!deleteEntity){
        console.log("There isn't a review with this id");
        return;
    }

    return await deleteEntity.destroy();
}

export {getReview, getReviewById, createReview, updateReview, deleteReview};