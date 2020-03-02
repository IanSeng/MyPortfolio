import GITHUB_USERNAME from "../app/config/config";
const fetch = require("node-fetch");

module GithubServices {
    
    export async function getUserRepos() {
        const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos`
        const response = await fetch(url)
        const result = await response.json()
        Object.keys(result).forEach(key => {
            console.log(result[key].name);
        });
    }

    export async function getRepoLanguages(repoName: string) {
        const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/languages`
        const response = await fetch(url)
        const result = await response.json()

        //console.log(repoName)
        //console.log(result)
    }
}

export { GithubServices };

