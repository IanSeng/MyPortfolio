class Repo {
    name: String;
    languages: Array<string>;
    url: String;
    constructor(name: String, languages: Array<string>, url: String ){
        this.name = name;
        this.languages = languages;
        this.url = url;
    }

    toString(){
        return  `Repo - ${this.name}
                 languages used: ${this.languages}
                 url: ${this.url}`
    }
}

export = Repo;