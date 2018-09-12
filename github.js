// es6 class
class Github {
  constructor()
  {
    this.client_id ='fd7fd8689a756c39ac88';
    this.client_secret = 'f61ca76533bafa37952670d13bcabc31108035bb';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user)
  {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}