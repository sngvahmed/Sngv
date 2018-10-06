export class Project {
    constructor() {
        const _projecturl = "http://localhost:9000/project"
        Object.assign(this, {
            get _projecturl() {
                return _projecturl;
            }
        });

        this.loading = true;
        this.getHomeContent();
    }

    get html() {
        if (this.loading)
            return `
                <div> Loading </div>
            `
        else {
            let convertRespToHtml = (resps) => {
                let res = "";
                for (const i in resps) {
                    console.log(resps[i]);
                    res += `<p class="project-responsibility"> ${resps[i]} </p>`
                }
                return res;
            }

            let allProject = (projs) => {
                let res = "";
                for (const i in projs) {
                    res += `
                    <div class="project">
                        <div class="row" style="background: white;padding:5px">
                            <div class="col-md-3 project-header">
                                <div class="center-h">
                                    <p> ${projs[i]['name']} </p>
                                    <p> ${projs[i]['date']} </p>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="project-content">  
                                    <h5 class="project-details"> ${projs[i]['details']} </h5>
                                    <br>
                                    <h5> Responsibility </h5>
                                    <div>${convertRespToHtml(projs[i]['responsibility'])}</div>
                                </div>
                            </div>
                        </div> 
                    </div>
                `
                }
                return res;
            }

            return `<div class="projects">${allProject(this.homeData)}</div>`;
        }
    }

    getHomeContent() {
        fetch(this._projecturl).then(res => {
            this.loading = false;
            return res.json()
        }).then(res => {
            this.homeData = res.result;
        });
    }

}