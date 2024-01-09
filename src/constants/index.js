import {
    docker,
    serve,
    blog1,
    blog2,
    blog3,
    blog4,
    blog5,
    blog6, 
    cnative,
    observe,
    virtual
} from "../assets"


export const experiences = [
    {
      title: "Site Reliability Engineer Intern",
      company_name: "Deimos Cloud",
      date: "June 2023 - Present",
      points: [
        "Managed Cloud infrastructure on GCP and AWS, enhancing performance and cost-efficiency.",
        "Led the setup and configuration of Kubernetes Clusters, promoting scalability and efficient resource usage.",
        "Configured CI/CD pipelines to deploy to Kubernetes Clusters.",
        "Demonstrated expertise in Docker, configuring Kubernetes clusters across platforms such as EKS, AKS, and Unmanaged clusters.",
        "Implemented Continuous Integration and deployment using Tekton, Jenkins (Scripted pipelines), Github Actions, and GitOps.",
        "Enforced security best practices for resilient and reliable cloud infrastructure.",
        "Actively participated in the creation and management of Kuber"

      ],
    },
    {
      title: "Cloud DevOps Engineer Intern",
      company_name: "She Code Africa",
      date: "December 2020 - Jan 2023",
      points: [
        "Proficiently configured and deployed virtual machines, web applications, and App services.",
        "Successfully managed cloud databases, ensuring data reliability and availability.",
        "Completed the AWS Cloud Practitioner Bootcamp and graduated from the AWS Re/Start program in December 2022.",
        "Achieved certifications in NMCP/MCSA Windows Server 2012 (September 2016) and AWS/reStart Post Graduate (December 2023)."
        
      ],
    },
    {
      title: "Technical Support Specialist",
      company_name: " Herotel",
      date: "April 2020 - August 2022",
      points: [
        "Diligently attended to network incidents and service requests, ensuring swift service restoration on wireless and Fiber networks.",
        "Proficiently diagnosed and troubleshooted technical issues related to LAN/WAN/VLANs, TCP/IP, and DHCP.",
        "Effectively resolved router (Mikrotik) queries and other client CPE queries remotely, ensuring minimal service disruption.",
        "Provided expert telephonic support to customers, ensuring a high level of service satisfaction & accurate logging of calls on customer portals for comprehensive tracking and documentation.",
        "Ensured swift responses and timely escalation of issues to all customers, maintaining high service standards.",
        "Meticulously followed up on completed tasks in accordance with customer/user policies and procedures to ensure a seamless service experience."
      ],
    },
    {
      title: "Technical Support Specialist",
      company_name: " Afrihost ISP",
      date: "August 2016 - September 2019",
      points: [
        "Provided clients with comprehensive information on Afrihost products and assisted with signups through the Afrihost website, ensuring a smooth onboarding process.",
        "Expertly configured routers and mobile devices, facilitating quick and hassle-free device setup for clients.",
        "Installed web applications on behalf of clients and efficiently restored broken applications and websites, ensuring uninterrupted online operations.",
        "Set up domains on cloud servers and configured internet email accounts for clients, simplifying online presence and communication.",
        "Handled the registration of domain names and domain transfers, ensuring clients' web assets were properly managed and safeguarded.",
        "Set up spam filters on clients' domains, enhancing email security and reducing unwanted email clutter."
      ],
    },
  ];

  const portfolio = [
    {
        project_name:"Dockerizing a Node.js Application",
        project_image: docker,
        project_tools:"Node.js, Kubernetes, CI/CD, GCP, Kubectl, Github.",
        project_details:"Orchestrating containers with Kubernetes, implementing CI/CD, and deploying on GCP.",
        github_repo: "https://github.com/sipsdaoracle/sipsdaoracle"

    },
    {
        project_name:"Containerize - Web Server with MYSQL",
        project_image: serve,
        project_tools:"Apache, PHP, MySQL, Docker, Git, Prometheus, Grafana, Promtail, Alert Manager",
        project_details:"Creating a web server using Apache2, Dockerizing the application, and linking it to a MySQL database.",
        github_repo: "https://github.com/sipsdaoracle/-Containerize---Web-Server-with-MYSQL"


    },
    {
        project_name:"Virtualization - Linux VM Setup and Nginx",
        project_image: virtual,
        project_tools:"Virtual Player, Linux VM, NGINX, Bash, Cronjobs.",
        project_details:"Configuring a Linux Virtual Machine using VMware Player, setting up Nginx from source, and implementing automated daily backups.",
        github_repo: "https://github.com/sipsdaoracle/Virtualization---Linux-VM-Setup-and-Nginx"


    },
    {
        project_name:"Cloud Native CI/CD",
        project_image: cnative,
        project_tools:"GitHub, Tekton, Docker, Local registry, ArgoCD, Local Kubernetes cluster, Draw.io Integration.",
        project_details:"Establishing a Tekton CI/CD pipeline for building container images, deploying to a local Kubernetes cluster managed by ArgoCD, and visualizing the application with Draw.io integration",
        github_repo: "https://github.com/sipsdaoracle/Cloud-Native-CI-CD"
        

    },
    {
        project_name:"Observability - MySQL and Grafana Agent Deployment",
        project_image: observe,
        project_tools:"Dev Container, GitOps, Helm Chart, MySQL, Grafana Agent, Prometheus, Loki, MiniKube",
        project_details:"Deploying and configuring MySQL and Grafana Agent in a Kubernetes cluster using GitOps and Dev Container.",
        github_repo: "https://github.com/sipsdaoracle/Observability---MySQL-and-Grafana-Agent-Deployment"


    }

  ]

  const blogs = [
    {
      blog_image: blog1,
      blog_name:"Build a JavaScript single-page application (SPA) (Microsoft Graph)",
      blog_description:"Today, I'll be building a JavaScript Single Page Application that signs in users and calls Microsoft Graph, it does this by using authorization code flow with PKCE",
      blog_url:"https://dev.to/sipsdaoracle/build-a-javascript-single-page-application-spa-microsoft-graph-349i"
    },
    {
      blog_image: blog2,
      blog_name:"How to create a JSON ARM template with Visual Studio Code",
      blog_description:"In this exercise, we will use the extension to create an ARM template from scratch. While doing so you experience the extensions capabilities such as ARM template snippets , validation , completions, and parameter file support.",
      blog_url:"https://dev.to/sipsdaoracle/how-to-create-a-json-arm-template-with-visual-studio-code-3cfb"
    },
    {
      blog_image: blog3,
      blog_name:"Create a Virtual Machine Instance(EC2) in AWS & Connect Via SSH(Cloudshell)",
      blog_description:"An EC2 (Elastic Compute Cloud) is a virtual computing environment provided by Amazon Web Services (AWS). It allows you to create and manage virtual machines (instances) in the cloud.",
      blog_url:"https://dev.to/sipsdaoracle/create-a-virtual-machine-instanceec2-in-aws-connect-via-sshcloudshell-13i3"
    },
    {
      blog_image: blog4,
      blog_name:"Exploring AWS CloudShell and the AWS Cloud9 IDE",
      blog_description:"This article is based on the AWS lab practical - AWS Cloud9 IDE which is available on the AWS re/start Canvas platform.",
      blog_url:"https://dev.to/sipsdaoracle/exploring-aws-cloudshell-and-the-aws-cloud9-ide-jpf"
    },
    {
      blog_image: blog5,
      blog_name:"How to Deploy and configure servers and database for Azure SQL",
      blog_description:"If you have ever wondered and would like to know how to Deploy and configure servers and database for Azure SQL and query some sample data then this article is just the cup of tea you need to get you going.",
      blog_url:"https://dev.to/sipsdaoracle/build-a-javascript-single-page-application-spa-microsoft-graph-349i"
    },
    {
      blog_image: blog6,
      blog_name:"How to Build your first Static Web App on Azure",
      blog_description:"Building a Static Web App might sound a bit intimidating especially if you're a beginner to using cloud platforms such as Azure. You might wonder why do you even need to build one? And with your busy schedule, you might ask how long will it take you to complete.",
      blog_url:"https://dev.to/sipsdaoracle/how-to-build-your-first-static-web-app-on-azure-4f12"
    }
  ]

  export{portfolio, blogs}