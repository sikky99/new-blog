export const FetchPostsApi = () => {
    return (dispatch) => {
            const Cosmic = require('cosmicjs')
            var api = new Cosmic();
            var bucket = api.bucket({
              slug: process.env.REACT_APP_COSMIC_BUCKET || 'a4b02d10-ddd3-11ec-888f-1f0fa74d0f44',
              read_key: process.env.REACT_APP_COSMIC_READ_KEY || 'S97nSZhSotvCwPycr9LI68pLTAqGywqvrM5YCnOd8QoucOQxqk'
            })
            bucket.getObjects().then(data => {          
            dispatch({type:"FETCH_POSTS", data:data});            
            }).catch(err => {
              console.log(err)
            })

    }
}