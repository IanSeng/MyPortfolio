export class Repo {
    public name: String;
    public url: String;
    public languages: Array<any>;

    constructor(name: String, url: String, languages: Array<any>) {
        this.name = name;
        this.url = url;
        this.languages = languages;
    }

    toString() {
        return `
        Repo          : ${this.name}
        languages used: ${this.languages}
        url           : ${this.url}`
    }
}
