import GITHUB_USERNAME from "../app/config/config";
const fetch = require("node-fetch");

module GithubServices {
    let userRepoList: Array<any> = [];
    let repoLanguages: Array<any> = [];
    
    export async function getUserRepos() {
        const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos`
        const response = await fetch(url)
        const result = await response.json()

        Object.keys(result).forEach(key => {
            userRepoList.push({ name: result[key].name, htmlUrl: result[key].html_url });
        });
        return userRepoList;
    }

    export async function getRepoLanguages(repoName: string) {
        const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/languages`
        const response = await fetch(url)
        const result = await response.json()

        Object.keys(result).forEach(key => {
            repoLanguages.push(key)
        });
        return repoLanguages;
    }
}

export { GithubServices };

