import axios from 'axios'

export const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
})

export const imageBaseUrl = `https://image.tmdb.org/t/p/original`

export const makeApiCallToEndPoint = async(urlPath:string)=>{
   const result =  await instance.get(urlPath);
   return result.data.results;
}

// export const makeApiCallToEndPoint = async(urlPath:string)=>{
//      await instance.get(urlPath).then((response)=>{
//         return response.data.results
//      })
//  }
