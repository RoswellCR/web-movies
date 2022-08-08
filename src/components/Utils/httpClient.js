const API = "https://api.themoviedb.org/3"; 

export function get(path) {
    return(
        fetch(API+ path,{
          headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWFmMmY4ODA1MjI1Y2MxM2NmY2I2Y2YyMzAwNDRjOCIsInN1YiI6IjYxMmYxYTFjOWJjZDBmMDA0MmMxZmZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GYJAI23GYdDDLpYBeY3LujFxRmKreN00wrUFiTq88qo",
            "Content-Type": "application/json;charset=utf-8"
          }
        })
        .then(result => result.json()))
    }
        
      
