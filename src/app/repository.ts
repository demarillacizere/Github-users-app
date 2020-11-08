export class Repository {
    constructor(public name:string, public html_url: string, public description: string, public created_at: Date){
        this.name = name;
        this.html_url = html_url;
        this.description = description;
        this.created_at = created_at;
    }
}
