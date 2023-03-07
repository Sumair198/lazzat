import mongoose from 'mongoose'

const Connnectiondb = () =>
{
   return  mongoose.connect('mongodb://localhost:27017/lazzat-testing')
    .then(() => {
      console.log('Connected Successfully')
    })
    .catch((err) => {
      console.log(err)
    }
    )
}

export default Connnectiondb;