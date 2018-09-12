class UI 
{
  constructor()
  {
    this.profile = document.getElementById('profile');
  }

  showProfile(user)
  {
    //console.log(user);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="btn btn-xs btn-primary">Public Repos: ${user.public_repos}</span>
            <span class="btn btn-xs btn-secondary">Public Gists: ${user.public_gists}</span>
            <span class="btn btn-xs btn-success">Followers: ${user.followers}</span>
            <span class="btn btn-xs btn-primary">Following: ${user.following}</span>
            <span class="btn btn-xs btn-primary">Repos: ${user.public_repos}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Name: ${user.name}</li>
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">
        Latest Repos:
      </h3>
      <div id="repos">

      </div>
    `;
  }

  // show user repos
  showRepos(repos)
  {
    let output = '';

    repos.forEach(function(repo){
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="btn btn-xs btn-primary">Stars: ${repo.stargazers_count}</span>
              <span class="btn btn-xs btn-secondary">Wartchers: ${repo.watchers_count}</span>
              <span class="btn btn-xs btn-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // output repos
    document.getElementById('repos').innerHTML = output;
  }

  // show alert message
  showAlert(message, className)
  {
    // clear remaining alerts
    this.clearAlert();
    
    // create div
    const div = document.createElement('div');
    // add classes
    div.className = className;
    // get text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.searchContainer');
    // get search box
    const search = document.querySelector('.search');
    // insert alert
    container.insertBefore(div, search);

    // timeout afetr 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear alert message
  clearAlert()
  {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert)
    {
      currentAlert.remove();
    }
  }

  // clear profile
  clearProfile()
  {
    this.profile.innerHTML = '';
  }
}