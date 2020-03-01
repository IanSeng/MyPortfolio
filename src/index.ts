import GITHUB_USERNAME from "./config";
const fetch = require("node-fetch");


async function getUserRepos() {
    const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos`
    const response = await fetch(url)
    const result = await response.json()

    //console.log(result)

    // Object.keys(result).forEach(key => {
    //     console.log(result[key].name)
    //   });

    Object.keys(result).forEach(key => {
        getRepoLanguages(result[key].name);
    });


}

async function getRepoLanguages(repoName: string) {
    const url = `https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/languages`
    const response = await fetch(url)
    const result = await response.json()
    console.log(repoName)

    console.log(result)

    


}

//getUserRepos();
getUserRepos();

