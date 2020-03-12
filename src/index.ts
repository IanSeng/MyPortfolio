import { GithubServices } from "./services/github-services"
import { Repo } from "./repo";
import * as data from "./data.json";

async function hello() {
    //let repos: Repo[] = [] 

    //const userRepoData = await GithubServices.getUserRepos();
    //console.log(JSON.stringify(userRepoData))
    
    // userRepoData.forEach(async element => {
    //     let y = await GithubServices.getRepoLanguages(element.name);
    //     //console.log(await GithubServices.getRepoLanguages(element.name))
    //     //console.log(y)
    //     repos.push(new Repo("hi", "element.htmlUrl", ["hi"]))
    //     console.log(repos)
    // })
    // let x = new Repo('heh',"ee",["ee"])

    //repos.push(x)
     //repos.push(new Repo('hewwrh',"ee",["ee"]))
     //repos.push(new Repo('wok-FeelsBook',"https://github.com/IanSeng/wok-FeelsBoo",["java"]))
    //console.log(repos)
   data.forEach(element => {
       console.log(element.name)
   })


}

hello();                                                   