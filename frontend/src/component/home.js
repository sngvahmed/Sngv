export class Home {
    constructor() {
        let _homeurl = "http://localhost:9000/home";

        Object.assign(this, {
            get _homeurl() {
                return _homeurl;
            }
        });

        this.loading = true;
        this.getHomeContent();
    }

    get html () {
        if (this.loading)
            return `
                <div> Loading </div>
            `
        else {
            let x = 100;
            while(this.homeData['summary'].indexOf('\n') !== -1 && x--) {
                this.homeData['summary'] = this.homeData['summary'].replace('\n', "<br>")
            }

            const roles = (roles) => {
                console.log(roles)
                let res = "";
                for (const role in roles) {
                    console.log(role)
                    res = res + `<div class="role"> ${roles[role]} </div>`
                }
                return res;
            }
            return `
                <div class="home"> 
                    <h2 class="center"> ${this.homeData['fullname']}</h2>
                    <h6 class="center work"> ${this.homeData['work']}</h6>
                    <h6 class="center email"> ${this.homeData['email']}</h6>
                    <h6 class="center phone"> ${this.homeData['phone']}</h6>
                    <h6 class="center graduated"> ${this.homeData['graduated']}</h6>
                    <br><br>
                    <p>${this.homeData['summary']}</p>
                    ${roles(this.homeData['roles'])}
                </div>
            `
        }
    }

    getHomeContent() {
        fetch(this._homeurl).then(res => {this.loading = false; return res.json() })
            .then( res => {
                this.homeData = res.result;
                $('#sngv-content').html(this.html)
            });
    }
}