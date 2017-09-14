

const authFunction = () => {
  return true
}

const getApiSum = (a,b) => {
    if(authFunction){
      const c = a+b  
      return  c
    }
    return 0
}

export {
  getApiSum
}

