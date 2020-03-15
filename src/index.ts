import { GithubServices } from "./services/github-services"
import { Repo } from "./repo";

const fs = require('fs');

async function hello() {
    //let repos: Repo[] = [] 

    const userRepoData = await GithubServices.getUserRepos();
    let repoList: any = [];


    await Promise.all(userRepoData.map(async (repo: any) => {
        //console.log(repo.name)
        const getRepoLanguages: any[] = await GithubServices.getRepoLanguages(repo.name);
        repoList.push(new Repo(repo.name, repo.html_url, getRepoLanguages))




    }));
   
    fs.writeFile("./repoList.json", JSON.stringify(repoList), 'utf8', function (err: any) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
        console.log("JSON file has been saved.");
    });




}

hello();                                                   