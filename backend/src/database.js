export class Database {
    constructor() {}

    static get socialUrls() {
        return {
            github: "https://github.com/sngvahmed",
            linkedIn: "https://www.linkedin.com/in/ahmed-nasser-sngv",
            facebook: "https://www.facebook.com/sngv1993",
            twitter: "https://twitter.com/ahmed_nasser93",
            google: "https://plus.google.com/+nasserfci"
        }
    }

    static get homeContent() {
        return {
            fullname: "Ahmed Nasser Saleh",
            work: "Software Developer At OLE (Orange Lab Egypt)",
            email: "Ahmednasser1993@gmail.com",
            graduated: "Computer Sceince Bachelor's 2015 Cairo University",
            summary: `I am 25 years old I am Full Stack developer and block-chain developer at Orange lab Egypt.
                I have over 3 years of experience working in web application.`,
            roles: [
                'Blockchain Developer', 'Docker', 'Angular Developer', 'Python Developer'
            ],
            phone: '01277866963'
        }
    }

    static get project() {
        return [
                {
                    name: 'Blockchain',
                    date: 'Oct 2017 – Present',
                    details: `Blockchain As a Service is a hosting solution for Blockchain applications based on Hyperledger Fabric Framework`,
                    responsibility: [
                        'Build Web application [Frontend & Backend] tasks',
                        'Control VMS via ansible and web api',
                        'Know the hyperledger rules to build blockchain',
                        'Build Docker image for frontend and backend',
                        'Build Registry in Admin VM',
                        'Generate [ Configuration ,certificate, scripts ] files',
                        'Automate initialize docker swarm between Nodes and automate deploying blockchain',
                        'Write smart contract using Es6',
                        'Edit in Youmen open source application to modify generation'
                    ]

                },
                {
                    name: 'OVA',
                    date: '2016',
                    details: `Solution offers an « as a service » solution to create virtual agents to answer questions without human`,
                    responsibility: [
                        'Implement tasks in frontend using Angular1',
                        'Write Junit Test for backend',
                        'Implement tasks in backend using Spring',
                        'Fix sonar issue problem'
                    ]
                }, {
                    name: 'EVA',
                    date: '2016',
                    details: `Platform to visualize and analyze corpus of sentences by classifying their verbatim into different categories then customize semantic analysis rules`,
                    responsibility: [
                        'Implement tasks in frontend using Angular1',
                        'Write Junit Test for backend',
                        'Write E2E testing for frontend',
                        'Implement tasks in backend using Spring Boot',
                        'Fix sonar issue problem',
                        'Add lint for frontend in jenkins tools'
                    ]
                }, {
                    name: 'Practical Guide',
                    date: '2016',
                    details: `Web application for internal orange employees to create articles about some topics and share the knowledge`,
                    responsibility: [
                        'Implement tasks in frontend using Angular 4',
                        'Write Junit Test for backend',
                        'Write E2E testing for frontend',
                        'Implement tasks in backend using Spring Boot',
                        'Fix sonar issue problem',
                        'Add lint for frontend in jenkins tools',
                        'Act as scrum master'
                    ]
                }, {
                    name: 'Sngv CV',
                    date: '2018',
                    details: `Personal Blog online`,
                    responsibility: [
                        'Use only javascript to implement frontend part',
                        'Write backend tasks using express',
                        'Implement Webpack and babel configuration'
                    ],
                    link: 'https://github.com/sngvahmed/Sngv'
                }, {
                    name: 'Hyperledger configuration using kafka',
                    date: '2018',
                    details: ``,
                    responsibility: [
                        'implement kafka with hyperledger',
                        'implement docker configuration file'
                    ],
                    link: 'https://github.com/sngvahmed/simple-network-using-kafka'
                }, {
                    name: 'Problem Solving Solution',
                    date: '2018',
                    details: `solution problem answer`,
                    responsibility: [
                        'solving using c++'
                    ],
                    link: 'https://github.com/sngvahmed/problem-solving-code'
                },{
                    name: 'Open Downloud Manager',
                    date: '2018',
                    details: `Open source download manger for download any type of file from the internet`,
                    responsibility: [
                        'build gui app using java',
                        'automate install using maven to build jar file'
                    ],
                    link: 'https://github.com/sngvahmed/openDownloudManager'
                }
            ]
        
    }
}