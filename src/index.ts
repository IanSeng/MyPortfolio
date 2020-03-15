import { GithubServices } from "./services/github-services"
import { Repo } from "./repo";
import { default as data } from "./data.json";

async function hello() {
    //let repos: Repo[] = [] 

    const userRepoData = await GithubServices.getUserRepos();
    let chain: any = [];
    // console.log(JSON.stringify(userRepoData))

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
    // let repoNameList: any[] = []
    // let repoLanguage: any[] = []
    // data.forEach(element => {
    //     repoNameList.push(element.name)
    // })

    await Promise.all(userRepoData.map(async (element: any) => {
        console.log(element.name)
        const getRepoLanguages: any[] = await GithubServices.getRepoLanguages(element.name);
        
        chain.push(new Repo(element.name, element.html_url, getRepoLanguages))

        //console.log(element)
        //console.log(contents)
    }));
    console.log(chain)
    // let x = new Repo("hu", "this", ['he', 'le'])
    // chain.push(x)
    // let y = new Repo("hqexx", "this", ['he', 'le'])
    // chain.push(y)
    
    // console.log(repoNameList)
    // repoNameList.forEach(async element => {
    //     let y = await GithubServices.getRepoLanguages(element);
    //     //repoLanguage.push([element,y])
    //     console.log(element)
    // })

    //let y = await GithubServices.getRepoLanguages("blockchain");
    //console.log(await GithubServices.getRepoLanguages(element.name))
    //console.log(y)





}

hello();                                                   