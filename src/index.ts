import { GithubServices } from "./services/github-services"
import Repo = require("./repo");

async function hello() {
    let x = await GithubServices.getUserRepos();
    console.log(x)

    x.forEach(async element => {

        let y = await GithubServices.getRepoLanguages(element.name);
        //const repo = new Repo(element.name, await GithubServices.getRepoLanguages(element.name), element.htmlUrl)
        
    })
}

hello();