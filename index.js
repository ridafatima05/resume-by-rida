"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Listing Elements
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    //Type Assertion
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement
        && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        //Create Resume Output Result
        const resumeOutput = `
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
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("Resume information missing from display!");
        }
    }
    else {
        console.error("Some expected outputs are missing!");
    }
});
