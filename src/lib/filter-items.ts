export const convertAllBreeds = (obj: any, status: string) => {
  if (status === "success" && obj) {
    let newObj: any = {}
    for (let key in obj) {
      if (obj[key] && obj[key].length === 0) {
        newObj[key.toUpperCase()] = key
      } else {
        for (let i = 0; i < (obj[key] ? obj[key].length : 0); i++) {
          let newKey = (obj[key][i] + " " + key).toUpperCase()
          newObj[newKey] = key + "/" + obj[key][i]
        }
      }
    }
    return newObj
  }
}
