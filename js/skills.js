async function fetchData(type= "skills"){
    let response
    type == "skills" ?
    response = await fetch ("json/skills.json"):
    response = await fetch ("")
    const data = await response.json();
    return data;
}


function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

fetchData("skills").then(data => {
    showSkills(data);
});

