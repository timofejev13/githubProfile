class GitHub{
    constructor(){
        this.client_id='470ffb4b3ba1a7bf6ebe';
        this.client_secret='aba8a3f78404db79b98e35866b4f9ad8bad8a66d';
        this.repos_count = 5;
        this.repos_sort= 'created:asc';
        this.user='timofejev13';
    }
    //get a user info
    async getUserData(user){
        let urlProfile= `http://api.github.com/${this.user}?client_id=${this_client_id}&client_secret=${this_client_secret}`;
        let urlRepos= `https://api.github.com/${this.user}/repos/per_page=${this.repos_count}&sort${this.repos_sort}&client_id=${this_client_id}&client_secret=${this_client_secret}`
        const profileResponse = await fetch(urlProfile);
        const profileResponse = await fetch(urlRepos);
    }
}
