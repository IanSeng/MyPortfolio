import GITHUB_USERNAME from "../app/config/config";
import { Repo } from "../repo";
const fetch = require("node-fetch");

module GithubServices {
    let userRepoList: Array<any> = [];
    let repoLanguages: Array<any> = [];
    let repos: Repo[] = []


    export async function getUserRepos() {
        const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos`
        const response = await fetch(url)
        const result = await response.json()

        // Object.keys(result).forEach(async key => {
        //     const repoLan: any = (await getRepoLanguages(result[key].name))
        //     repos.push(result[key].name, result[key].html_url, repoLan)

        // });

        return result

    }

    export async function getRepoLanguages(repoName: string) {
        const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/languages`
        const response = await fetch(url)
        const result = await response.json()
        //console.log(result)

        Object.keys(result).forEach(key => {
            repoLanguages.push(key)
        });
        return repoLanguages;
    }
}

export { GithubServices };


//https://api.github.com/repos/IanSeng/wok-FeelsBook/languages