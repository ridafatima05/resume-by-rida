//Listing Elements
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();


//Type Assertion
const nameElement = document.getElementById('name')as HTMLInputElement
const emailElement = document.getElementById('email')as HTMLInputElement
const phoneElement = document.getElementById('phone')as HTMLInputElement
const educationElement = document.getElementById('education')as HTMLInputElement
const experienceElement = document.getElementById('experience')as HTMLInputElement
const skillsElement = document.getElementById('skills')as HTMLInputElement

if (nameElement && emailElement && phoneElement && educationElement 
    && experienceElement && skillsElement){
        const name = nameElement.value
        const email = emailElement.value 
        const phone = phoneElement.value
        const education = educationElement.value
        const experience = experienceElement.value
        const skills = skillsElement.value

    
    //Create Resume Output Result
    const resumeOutput =`
    <h1>Resume</h1>
    <h2>Name: </h2>
    <p>${name}</p>
    <h2>Email: </h2>
    <p>${email}</p>
    <h2>Phone Number: </h2>
    <p>${phone}</p>

    <h2>Education: </h2>
    <p>${education}</p>
     <h2>Experience: </h2>
     <p>${experience}</p>
    <h2>Skills: </h2>
    <p>${skills}</p>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    }else {
        console.error("Resume information missing from display!")
    }
    


    }else {
        console.error("Some expected outputs are missing!")
    }



});
