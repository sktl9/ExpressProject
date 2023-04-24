import * as uuid from 'uuid'
import * as path from 'path'
import { log } from 'console'

class FileService{
async saveFile(file){
    try{
  const fileName =uuid.v4() + '.jpg'
   const filePath = path.resolve ('static')
   file.mv(filePath)
   return fileName
    }catch(e){     
        console.log(e)
    }
 
}
}
export default new FileService