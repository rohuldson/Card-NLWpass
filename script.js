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
   alert(li.children[0].href)
  }
}

changeSocialMediaLinks()
