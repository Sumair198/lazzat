import express from "express";
const router = express.Router()

import {createMenu ,Menu, getHomeMenu,speciality,maincourse, yummydesserts,chinese,Booking,specialityMenu,maincourseMenu,yummydessertsMenu,chineseMenu,registerUser,loginUser} from "../Controller/Controller.js";
import multer from "multer";



//Create Menu 
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '/lazzat/lazzat/public/uploads')
        }
        , filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }

    })
}).single('image')
 
//post api with image upload
router.post('/upload' , upload, createMenu )


//Get all Menu 
router.get('/',getHomeMenu)

//Get Home Menu 
router.get('/menu',Menu)



//Categorys true
router.get('/menu/ourspeciality',speciality)
router.get('/menu/maincourse',maincourse)
router.get('/menu/yummydesserts',yummydesserts)
router.get('/menu/chinese',chinese)


//Categorys false
router.get('/menu/ourspecialityMenu',specialityMenu)
router.get('/menu/maincourseMenu',maincourseMenu)
router.get('/menu/yummydessertsMenu',yummydessertsMenu)
router.get('/menu/chineseMenu',chineseMenu) 


//Booking-form-Api
router.post('/booknow',Booking)

//Register User
router.post('/register',registerUser)


//Login User
router.post('/login',loginUser)
//work


export default router;