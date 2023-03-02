const handleSubmit = (e) => {
  e.preventDefault();
  const userName = document.getElementById("searchField").value;
  fetchUser(userName);
};

const fetchUser = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  const user = await response.json();
  if (!response.ok) {
    alert(user.message);

    return;
  } else {
    renderUser(user);
  }
};

const renderUser = (user) => {
  // set the userName dynamic
  const userName = document.getElementById("user-username");
  userName.innerHTML = `<a target="_blank" href="https://github.com/${user.login}">@${user.login}</a> `;

  // set the avatar dynamic
  const userAvatar = document.getElementById("user-img");
  userAvatar.src = user.avatar_url;
  // set the avatar dynamic in mobile
  const userMAvatar = document.getElementById("user-img-mobile");
  userMAvatar.src = user.avatar_url;

  // set joined date
  const joinedDate = document.getElementById("user-joined-time");
  const joinedAt = user.created_at.split("T")[0];
  const parsedJoinedAt = joinedAt.split("-");

  const year = parsedJoinedAt[0];
  const month = parsedJoinedAt[1];
  const day = parsedJoinedAt[2];

  // Converts month to shortened text version
  const date = new Date(year, month, day);
  date.setMonth(month - 1);

  const monthTxt = date.toLocaleString("en", { month: "short" });
  console.log(user);
  joinedDate.dateTime = joinedAt;
  joinedDate.innerText = `Joined ${day} ${monthTxt} ${year}`;

  // set the user bio
  const bio = document.getElementById("user-bio");
  bio.innerText = `${user.bio ? user.bio : "This profile has no bio"}`;

  // set the user repos
  const repos = document.getElementById("user-repos");
  repos.innerText = `${user.public_repos}`;

  // set the user followers
  const followers = document.getElementById("user-followers");
  followers.innerText = `${user.followers}`;

  // set the user followings
  const followings = document.getElementById("user-following");
  followings.innerText = `${user.following}`;

  // set the location
  const location = document.getElementById("user-location");
  location.innerText = `${user.location ? user.location : "Not Available"}`;

  // set the user website
  const website = document.getElementById("user-website");
  website.innerHTML = `${user.blog ? user.blog : "Not Available"}`;
  website.href = `https://${user.blog}`;

  if (website.innerText === "Not Available") {
    website.removeAttribute("href");
  }

  // set the twitter
  const twitter = document.getElementById("user-twitter");
  twitter.innerHTML = `${
    user.twitter_username ? user.twitter_username : "Not Available"
  }`;
  twitter.href = `https://twitter.com/${user.twitter_username}`;

  if (twitter.innerText === "Not Available") {
    twitter.removeAttribute("href");
  }

  // set the organization
  const organization = document.getElementById("user-organization");
  organization.innerText = `${user.company ? user.company : "Not Available"}`;
  organization.href = `https://github.com/${user.company}`;
  if (organization.innerText === "Not Available") {
    organization.removeAttribute("href");
  }
};

// default user show

fetchUser("mahmudulmr19");
