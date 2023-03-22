import express from "express";
const router = express.Router()

import {createMenu ,Menu, getHomeMenu,speciality,maincourse, yummydesserts,chinese,Booking,specialityMenu,maincourseMenu,yummydessertsMenu,chineseMenu,registerUser,loginUser,deleteMenu,getSingleMenu,getBooking,deletebooking,createTestimonials,getTestimonials,deleteTestimonial} from "../Controller/Controller.js";
import multer from "multer";



//Create Menu 
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '/Users/HP/Desktop/lazzat/lazzat/public/uploads')
        }
        , filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }

    })
}).single('image')
 
//post api with image upload
router.post('/upload' , upload, createMenu )



//testimonials start
const uploadTest = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '/Users/HP/Desktop/lazzat/lazzat/public/uploads/Testimonial-uploads')
        }
        , filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }

    })
}).single('photoTestimonial')

router.post('/testing' ,uploadTest, createTestimonials )
//testimonials end






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


//Delete Menu
router.delete('/delete/:id', deleteMenu)

//Edit 
router.get('/editmenu/:id',getSingleMenu)

//get booking data
router.get('/booking' , getBooking)

//Delete Booking
router.delete('/delbooking/:id', deletebooking)

//get testimonials
router.get('/gettestimonials' , getTestimonials)

//delete testimonial
router.delete('/deltestimonial/:id', deleteTestimonial)

export default router;