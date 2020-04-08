import GITHUB_USERNAME from "../app/config/config";
import { Repo } from "../repo";
const fetch = require("node-fetch");
const { google } = require('googleapis');
//const calendar = google.calendar({ version: 'v3', auth: "APIKEY" });

module GithubServices {
  let userRepoList: Array<any> = [];
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
    let repoLanguages: Array<any> = [];
    //console.log(result)

    Object.keys(result).forEach(key => {
      repoLanguages.push(key)
    });
    return repoLanguages;
  }


  export async function loadClient() {

    calendar.events.list({
      calendarId: 'ian.dev27@gmail.com',
      timeMin: (new Date()).toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',

    }, (err: any, res: any) => {
      if (err) return console.log('The API returned an error: ' + err);
      const events = res.data.items;
      if (events.length) {
        console.log('Upcoming 10 events:');
        events.map((event: any, i: any) => {
          //console.log(event)
          console.log(JSON.stringify(event))
          //const start = event.start.dateTime || event.start.date;
          //console.log(`${start} - ${event.summary}`);
        });
      } else {
        console.log('No upcoming events found.');
      }
    });

  }
}

export { GithubServices };


//https://api.github.com/repos/IanSeng/wok-FeelsBook/languages