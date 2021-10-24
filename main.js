const SocialMedias = {
  github: "rohuldson",
  facebook: "ronald.silvahuldson/",
  instagram: "rohuldson.jpeg",
  twitter: "roh_huldson",
  youtube: "channel/UCj7AQWwenoJh0FWLHAcGmlg"
};


function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

   li.children[0].href = `https://${social}.com/${SocialMedias[social]}`   
  }
}

changeSocialMediaLinks()


function getGithubProfileInfos() {

  const url = `https://api.github.com/users/${SocialMedias.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    bioProfile.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })

}

getGithubProfileInfos()