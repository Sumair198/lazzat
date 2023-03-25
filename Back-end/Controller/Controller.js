import MenuModel from "../Schema-Model/Menu-Schema.js"
import bookingModel from "../Schema-Model/Booking-Schema.js"
import RegisterUserModel from "../Schema-Model/Register.js"
import TestimonialModel from "../Schema-Model/Testimonials-Schema.js";
import nodemailer from 'nodemailer';
import bcrypt from "bcrypt"
import OurTeamModel from "../Schema-Model/OurTeam-Schema.js";

//Create Menu Start
const createMenu = async (req, res) => {

    console.log(req.file.filename)
    // const checked = req.file.filename
    // const path2 = checked.replace(/\\/g, "/")

    const menuDocument = new MenuModel(
        {
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename,
            price: req.body.price,
            status: req.body.status,
            is_featured: req.body.is_featured,
            category: req.body.category,

        },
    )
    const result = await menuDocument.save()
    console.log(result)
    res.send(result)
}
//Create Menu End



//Testimonails start
const createTestimonials = async(req,res)=>
{
     const checked = req.file.filename
    const path2 = checked.replace(/\\/g, "/")
    const testimonailsDoc = new TestimonialModel(
        {
            clientText : req.body.clientText,
            clientName : req.body.clientName,
            Profession: req.body.Profession,
            photoTestimonial: path2
        }
    )
    const result = await testimonailsDoc.save()
    console.log(result)
    res.send(result)
}
//Testimonails End

//Our Team start
const createOurTeam = async(req,res)=>
{
    const checked = req.file.filename
    const path2 = checked.replace(/\\/g, "/")
    const ourTeamDoc = new OurTeamModel(
        {
            teamImage:path2,
            teamName : req.body.teamName,
            teamTitle : req.body.teamTitle,
            teamFacebook: req.body.teamFacebook,
            teamInsta: req.body.teamInsta,
            teamWhatsapp: req.body.teamWhatsapp
        }
    )
    const result = await ourTeamDoc.save()
    console.log(result)
    res.send(result)
}
//Our Team end



//Get all Menu Start , is_featured : false , All Menu
const Menu = async (req, res) => {
    try {
        const result = await MenuModel.find()
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}
//Get all Menu End


//Get home Menu Start is_featured : true
const getHomeMenu = async (req, res) => {
    try {
        const result = await MenuModel.find({ is_featured: true })
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}
//Get home Menu End


//Categories is_featured : true
//speciality
const speciality = async (req, res) => {
    try {
        const result = await MenuModel.find({ category: 'ourspeciality', is_featured: true })
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}

//maincourse
const maincourse = async (req, res) => {
    try {
        const result = await MenuModel.find({ category: 'maincourse', is_featured: true })
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}
//yummydesserts
const yummydesserts = async (req, res) => {
    try {
        const result = await MenuModel.find({ category: 'yummydesserts', is_featured: true })
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}
//chinese
const chinese = async (req, res) => {
    try {
        const result = await MenuModel.find({ category: 'chinese', is_featured: true })
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}



//Categories is_featured : false
//speciality
const specialityMenu = async (req, res) => {
    try {
        const result = await MenuModel.find({ category: 'ourspeciality' })
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}

//maincourse
const maincourseMenu = async (req, res) => {
    try {
        const result = await MenuModel.find({ category: 'maincourse' })
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}
//yummydesserts
const yummydessertsMenu = async (req, res) => {
    try {
        const result = await MenuModel.find({ category: 'yummydesserts' })
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}
//chinese
const chineseMenu = async (req, res) => {
    try {
        const result = await MenuModel.find({ category: 'chinese' })
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}





//Booking-form-postData 
const Booking = async (req, res) => {
    // res.send('Booking Api running!!')

    const BookingDocument = new bookingModel(
        {
            yourName: req.body.yourName,
            phoneNumber: req.body.phoneNumber,
            requiredOn: req.body.requiredOn,
            noOfPerson: req.body.noOfPerson,
            yourRequest: req.body.yourRequest,

        },
    )
    const result = await BookingDocument.save()
    console.log(result)
    res.send(result)


    //Send Email code
    let testAccount = await nodemailer.createTestAccount();
    //default smtp server
    const transporter = nodemailer.createTransport({
        host: 'mail.supremecluster.com',
        port: 465,
        auth: {
            user: 'info@lazzateziyafat.com',
            pass: '2vJFi2hX9!'
        }
    });


    //logic 
    let info = await transporter.sendMail({
        from: '"lazzat e ziyafat" <info@lazzateziyafat.com>', // sender address
        to: "sumairk198@gmail.com", // list of receivers
        subject: "lazzat e ziyafat Booking.", // Subject line
        text: "Hello world text?", // plain text body
        html: `<table> <tr></tr><tr> <td>Name</td><td>${req.body.yourName}
        </td></tr><tr> <td>Phone Number</td><td>${req.body.phoneNumber}
        </td></tr><tr> <td>Date & Time</td><td>${req.body.requiredOn}
        </td></tr><tr> <td>No Of People</td><td>${req.body.noOfPerson}
        </td></tr><tr> <td>Your Request</td><td>${req.body.yourRequest}
        </td></tr><tr> </tr></table>`, // html body
    });
    console.log("Message sent: %s", info.messageId);
}

//Register User
const registerUser = async (req, res) => {

    const RegisterDocument = new RegisterUserModel(
        {
            email: req.body.email,
            password: req.body.password
        },
    )
    console.log('Ye chal raha hy ' + RegisterDocument)
    const token = await RegisterDocument.generateAuthToken()
    console.log('Return ' + token )

    const result = await RegisterDocument.save()
    console.log(result)
    res.send(result)
}

//Login User and check all validation
const loginUser = async (req, res) => {
    try { 
        const email = req.body.email
        const password = req.body.password

        const useremail = await RegisterUserModel.findOne({ email: email })
        const isMatch = await bcrypt.compare(password, useremail.password)

        // const token = await useremail.generateAuthToken()
        // console.log('Return ' + token )

        if (isMatch) {
            
            res.send('Logined')
            
        } else {
             
            res.send("Invalid password")
        }

    }
    catch (error) {
        res.send(`Ivalid Email and password ${error}`)
    }
}

//Delete Manu
const deleteMenu = async (req,res) =>
{
    const result = await MenuModel.findByIdAndDelete(req.params.id)
    console.log(result)
    res.send(result)
}  
//Edit
const getSingleMenu = async (req,res)=>
{
    try {
        const result = await MenuModel.find({_id: req.params.id})
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}


//get Booking
const getBooking = async (req,res)=>
{
    try {
        const result = await bookingModel.find()
        res.send(result)
    }
    catch (err) {
        console.log(err)
    }
}
//Delete Booking
const deletebooking = async (req,res) =>
{
    const result = await bookingModel.findByIdAndDelete(req.params.id)
    console.log(result)
    res.send(result)
} 


//get testimonials
const getTestimonials = async (req,res) =>
{
    const result = await TestimonialModel.find()
    res.send(result)
} 

const deleteTestimonial = async (req,res) =>
{
    const result = await TestimonialModel.findByIdAndDelete(req.params.id)
    console.log(result)
    res.send(result)
} 


//get our team
const getTeam = async (req,res) =>
{
    const result = await OurTeamModel.find()
    res.send(result)
} 

//delete team
const deleteTeam = async (req,res) =>
{
    const result = await OurTeamModel.findByIdAndDelete(req.params.id)
    console.log(result)
    res.send(result)
} 



export { createMenu, Menu, getHomeMenu, speciality, maincourse, yummydesserts, chinese, Booking, specialityMenu, maincourseMenu, yummydessertsMenu, chineseMenu, registerUser,loginUser,deleteMenu,getSingleMenu,getBooking,deletebooking,createTestimonials,getTestimonials,deleteTestimonial,createOurTeam,getTeam,deleteTeam };
