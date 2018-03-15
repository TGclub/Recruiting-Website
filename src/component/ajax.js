function ajax(url, method, data) {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest()
    req.open(method, url)
    req.onload = () => {
      if (req.status === 200) {
        resolve(req.response)
      } else {
        reject(req.statusText)
      }
    }
    req.onerror = () => {
      reject(Error("Network Error"))
    }
    req.send(data)
  })
}
export default {ajax}
