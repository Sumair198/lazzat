import axios from 'axios' 

const ourspeciality = async() =>
{
    try{
        return await axios.get(`http://localhost:4000/menu/ourspeciality`)
    }
    catch(err)
    {
        console.log('Error while calling api ourspeciality menu data!! ',err)
    }
}

const maincourse = async() =>
{
    try{
        return await axios.get(`http://localhost:4000/menu/maincourse`)
    }
    catch(err)
    {
        console.log('Error while calling api maincourse menu data!! ',err)
    }
}

const yummydesserts = async() =>
{
    try{
        return await axios.get(`http://localhost:4000/menu/yummydesserts`)
    }
    catch(err)
    {
        console.log('Error while calling api yummydesserts menu data!! ',err)
    }
}

const chinese = async() =>
{
    try{
        return await axios.get(`http://localhost:4000/menu/chinese`)
    }
    catch(err)
    {
        console.log('Error while calling api chinese menu data!! ',err)
    }
}



//Menu 
const ourspecialityMe = async() =>
{
    try{
        return await axios.get(`http://localhost:4000/menu/ourspecialityMenu`)
    }
    catch(err)
    {
        console.log('Error while calling api ourspeciality menu data!! ',err)
    }
}

const maincourseMe = async() =>
{
    try{
        return await axios.get(`http://localhost:4000/menu/maincourseMenu`)
    }
    catch(err)
    {
        console.log('Error while calling api maincourse menu data!! ',err)
    }
}

const yummydessertsMe = async() =>
{
    try{
        return await axios.get(`http://localhost:4000/menu/yummydessertsMenu`)
    }
    catch(err)
    {
        console.log('Error while calling api yummydesserts menu data!! ',err)
    }
}

const chineseME = async() =>
{
    try{
        return await axios.get(`http://localhost:4000/menu/chineseMenu`)
    }
    catch(err)
    {
        console.log('Error while calling api chinese menu data!! ',err)
    }
}

const testimonialsData = async () =>
{
    try{
        return await axios.get(`http://localhost:4000/gettestimonials`)
    }
    catch(err)
    {
        console.log('Error while calling api get  testimonials data!! ',err)
    }
}

//get out team
const ourTeamData = async () =>
{
    try{
        return await axios.get(`http://localhost:4000/getOurTeam`)
    }
    catch(err)
    {
        console.log('Error while calling api get Team data!! ',err)
    }
}
export  {ourspeciality,maincourse,yummydesserts,chinese,ourspecialityMe,maincourseMe,yummydessertsMe,chineseME,testimonialsData,ourTeamData};