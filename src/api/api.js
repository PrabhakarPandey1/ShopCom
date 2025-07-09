const getPosts = async() => {
    const responce = await fetch('https://dummyjson.com/products', {method:'GET',

    })
    return responce;
}
export default getPosts;