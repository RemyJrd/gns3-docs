(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(9),i=(a(0),a(211)),r=a(213),s={id:"what-is-gns3",title:"Getting Started with GNS3",sidebar_label:"What is GNS3?"},c={id:"getting-started/what-is-gns3",isDocsHomePage:!0,title:"Getting Started with GNS3",description:"Introduction",source:"@site/docs/getting-started/what-is-gns3.md",permalink:"/gns3-docs/docs/",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/getting-started/what-is-gns3.md",sidebar_label:"What is GNS3?",sidebar:"someSidebar",next:{title:"GNS3 Windows Install",permalink:"/gns3-docs/docs/getting-started/installation/windows"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"What is GNS3?",id:"what-is-gns3",children:[{value:"Architecture",id:"architecture",children:[]}]},{value:"GNS3 Comparisons",id:"gns3-comparisons",children:[{value:"GNS3",id:"gns3",children:[]},{value:"Packet Tracer",id:"packet-tracer",children:[]},{value:"Cisco VIRL",id:"cisco-virl",children:[]}]},{value:"Device Support",id:"device-support",children:[]},{value:"Use Cases",id:"use-cases",children:[]},{value:"Versions of GNS3",id:"versions-of-gns3",children:[]},{value:"GNS3 Help &amp; Support",id:"gns3-help--support",children:[{value:"Documentation",id:"documentation",children:[]},{value:"Community",id:"community",children:[]},{value:"GNS3 YouTube channel",id:"gns3-youtube-channel",children:[]},{value:"GNS3 courses",id:"gns3-courses",children:[]}]},{value:"Supported Operating Systems",id:"supported-operating-systems",children:[]},{value:"Supported Appliances",id:"supported-appliances",children:[]},{value:"Should you use the GNS3 VM?",id:"should-you-use-the-gns3-vm",children:[]},{value:"What is not supported or recommended",id:"what-is-not-supported-or-recommended",children:[{value:"ASA 8",id:"asa-8",children:[]},{value:"Local install with Qemu images",id:"local-install-with-qemu-images",children:[]},{value:"Complex topologies",id:"complex-topologies",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"GNS3 is used by hundreds of thousands of network engineers worldwide to emulate, configure, test and troubleshoot virtual and real networks. GNS3 allows you to run a small topology consisting of only a few devices on your laptop, to those that have many devices hosted on multiple servers or even hosted in the cloud."),Object(i.b)("p",null,"GNS3 is open source, free software that you can download from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://gns3.com"}),"http://gns3.com")),Object(i.b)("p",null,"It is actively developed and supported and has a growing community of over 800,000 members. By joining the GNS3 community you will be joining fellow students, network engineers, architects and others that have downloaded GNS3 over 10 million times to date. GNS3 is used in companies all over the world including Fortune 500 companies."),Object(i.b)("p",null,"GNS3 can help you prepare for certification exams such as the Cisco CCNA, but also help you test and verify real world deployments. Jeremy Grossman, the original developer of GNS3 originally created the software to help him study for his CCNP certifications. Because of that original work, you can today use to help you do the same without paying for expensive hardware."),Object(i.b)("p",null," GNS3 has allowed network engineers to virtualize real hardware devices  for over 10 years. Originally only emulating Cisco devices using software called Dynamips, GNS3 has now evolved and supports many devices from multiple network vendors  including Cisco virtual switches, Cisco ASAs, Brocade vRouters, Cumulus Linux switches, Docker instances, HPE VSRs, multiple Linux appliances and many others. Go here to see a list of appliances available: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://gns3.com/marketplace/appliances"}),"https://gns3.com/marketplace/appliances")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"GNS3 has been around for over 10 years. Some information you will find on the Internet is outdated or unfortunately entirely incorrect. This document will hopefully help answer questions and help you get started on your journey with GNS3."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"GNS3 does not only support Cisco devices. Cisco is often discussed because that is what most network engineers are interested in learning about. However, many other commercial and open source vendors are supported today in GNS3. You are now able to test interoperability between many vendors and even try out esoteric setups using network technologies with SDN, NFV, Linux and Docker."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Recommendation:")," If you are using an older version of GNS3, it is recommended that you upgrade to the current stable release of GNS3."),Object(i.b)("h2",{id:"what-is-gns3"},"What is GNS3?"),Object(i.b)("h3",{id:"architecture"},"Architecture"),Object(i.b)("p",null,"GNS3 consists of two software components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The GNS3-all-in-one software (GUI)"),Object(i.b)("li",{parentName:"ul"},"The GNS3 virtual machine (VM)")),Object(i.b)("p",null,"GNS3-all-in-one:"),Object(i.b)("p",null,"This is the client part of GNS3 and is graphical user interface (GUI). You install the all-in-one software on your local PC (Windows, MAC, Linux) and create your topologies using this software. This is what you usually see show in screenshots such as the following:"),Object(i.b)("img",{alt:"screenshot",src:Object(r.a)("img/getting-started/what-is-gns3/1.jpg")}),Object(i.b)("p",null,"Server options:"),Object(i.b)("p",null,"When you create topologies in GNS3 using the all-in-one software GUI client, the devices created need to be hosted and run by a server process. You have a few options for the server part of the software:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Local GNS3 server"),Object(i.b)("li",{parentName:"ol"},"Local GNS3 VM"),Object(i.b)("li",{parentName:"ol"},"Remote GNS3 VM")),Object(i.b)("p",null,"The local GNS3 server runs locally on the same PC where you installed the GNS3 all-in-one software. If for example you are using a Windows PC, both the GNS3 GUI and the local GNS3 server are running as processes in Windows. Additional processes such as Dynamips will also be running on your PC:"),Object(i.b)("p",null,"If you decide to use the GNS3 VM (recommended), you can either run the GNS3 VM locally on your PC using virtualization software such as VMware Workstation, Virtualbox or Hyper-V; or you can run the GNS3 VM remotely on a server using VMware ESXi or even in the cloud."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You are able to use GNS3 without using the GNS3 VM. This is a good way to get started initially, but this setup is limited and does not provide as many choices with regards to topology size and devices supported. If you want to create more advanced GNS3 topologies, or want to include devices such as the Cisco VIRL devices (IOSvL2, IOSvL3, ASAv) or other other devices that require Qemu, the GNS3 VM is recommended (and is often required)."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Start a basic GNS3 topology using only the GNS3-all-in-one software and once you have got that working, refer to additional documentation for the setup of a local GNS3 VM.Emulation versus Simulation:"))),Object(i.b)("p",null,"GNS3 supports both emulated and simulated devices."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Emulation:")," GNS3 mimics or emulates the hardware of a device and you run actual images on the virtual device. For example, you could copy the Cisco IOS from a real, physical Cisco router and run that on a virtual, emulated Cisco router in GNS3."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Simulation:")," GNS3 simulates the features and functionality of a device such as a switch. You are not running actual operating systems (such as Cisco IOS), but rather, a simulated device developed by GNS3, like the built-in layer 2 switch."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The lines between simulation and emulation blur a bit these days. You are now able to run Cisco VIRL images which are images of real Cisco operating system images which run on standardized virtual hardware. GNS3 emulates the hardware that VIRL images require to run"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Remember"),": Don\u2019t worry too much about the difference between simulation and emulation except for the following points:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Dynamips is an older technology that emulates Cisco hardware. It uses real Cisco IOS images. It is good for basic CCNA type topologies, but has a number of limitations such as only supporting older Cisco IOS versions (12.X) which are also not supported or actively updated by Cisco."),Object(i.b)("li",{parentName:"ol"},"The recommended Cisco images to use with GNS3 are those from Cisco VIRL (IOSv, IOSvL2, IOS-XRv, ASAv). This images are supported and are actively updated by Cisco. The images support current releases of the Cisco IOS (15.X) and provide the best scale and user experience.")),Object(i.b)("h2",{id:"gns3-comparisons"},"GNS3 Comparisons"),Object(i.b)("p",null,"Questions often arise about which software is the best. A lot of this is down to personal preference with all solutions providing some benefits and having some disadvantages."),Object(i.b)("p",null,"Bad old days: The world today is much better than the past! In the old days, network engineers studying for their CCNAs, CCNPs or CCIEs only had limited choices: Buy or rent physical Cisco equipment for your studies."),Object(i.b)("p",null,"Today, you have multiple choices when studying and testing networks:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"GNS3"),Object(i.b)("li",{parentName:"ol"},"Cisco Packet Tracer"),Object(i.b)("li",{parentName:"ol"},"Cisco VIRL"),Object(i.b)("li",{parentName:"ol"},"Physical equipment"),Object(i.b)("li",{parentName:"ol"},"Others")),Object(i.b)("h3",{id:"gns3"},"GNS3"),Object(i.b)("p",null,"As mentioned, GNS3 is open source software which you can download and use for free. The source code is available on GitHub if you are interested in taking a peek at the code. We hope you find it useful and beneficial, but if you don\u2019t like something, or want to add something, why don\u2019t you get involved by contributing? Join the community or volunteer to check code or add code recommendations. With over 800,000 community members, we can all learn from each other."),Object(i.b)("p",null,"There are, however, other options available that you can use. Some of them are free, some cost money. Use whichever works best for you. Use multiple options if you like. We are happy that there are a plethora of choices available today, which helps all of us improve and learn more about networking."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Advantages:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Free software"),Object(i.b)("li",{parentName:"ul"},"Open Source software"),Object(i.b)("li",{parentName:"ul"},"No monthly or yearly license fees"),Object(i.b)("li",{parentName:"ul"},"No limitation on number of devices supported (the only limitation is your hardware: CPU and memory)"),Object(i.b)("li",{parentName:"ul"},"Supports multiple switching options (NM-ESW16 Etherswitch module, IOU/IOL Layer 2 images, VIRL IOSvL2):"),Object(i.b)("li",{parentName:"ul"},"Supports all VIRL images (IOSv, IOSvL2, IOS-XRv, CSR1000v, NX-OSv, ASAv)"),Object(i.b)("li",{parentName:"ul"},"Supports multi vendor environments"),Object(i.b)("li",{parentName:"ul"},"Can be run with or without hypervisors"),Object(i.b)("li",{parentName:"ul"},"Supports both free and paid hypervisors (Virtualbox, VMware workstation, VMware player, ESXi, Fusion)"),Object(i.b)("li",{parentName:"ul"},"Downloadable, free, pre-configured and optimized appliances available to simplify deployment"),Object(i.b)("li",{parentName:"ul"},"Native support for Linux without the need for need for additional virtualization software"),Object(i.b)("li",{parentName:"ul"},"Software from multiple vendors freely available"),Object(i.b)("li",{parentName:"ul"},"Large and active community (800,000+ members)")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Disadvantages:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cisco images need to be supplied by user (download from Cisco.com, or purchase VIRL license, or copy from physical device)."),Object(i.b)("li",{parentName:"ul"},"Not a self contained package, but requires a local installation of software (GUI)."),Object(i.b)("li",{parentName:"ul"},"GNS3 can be affected by your PC\u2019s setup and limitations because of local installation (firewall and security settings, company laptop policies etc).")),Object(i.b)("h3",{id:"packet-tracer"},"Packet Tracer"),Object(i.b)("p",null,"Cisco Packet Tracer is an official Cisco product for Cisco Academy students that simulates Cisco networks. It does not emulate Cisco hardware or support real images from Cisco or other vendors."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Advantages:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Easy to set up"),Object(i.b)("li",{parentName:"ul"},"Supports Cisco router, switch and PC simulations"),Object(i.b)("li",{parentName:"ul"},"Sufficient for CCNA studies"),Object(i.b)("li",{parentName:"ul"},"Simulates multiple devices and protocols (routers, switches, wireless, RADIUS, etc...)"),Object(i.b)("li",{parentName:"ul"},"Free (requires registration at Cisco\u2019s NetAcad website)")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Disadvantages:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Proprietary code - not open source"),Object(i.b)("li",{parentName:"ul"},"Only simulates Cisco devices (Not running true Cisco images)"),Object(i.b)("li",{parentName:"ul"},"No multivendor support"),Object(i.b)("li",{parentName:"ul"},"Cannot integrate with real physical devices"),Object(i.b)("li",{parentName:"ul"},"You can only use the IOS commands implemented by the developers. Not every conceivable command available on a platform simulated in Packet Tracer will be present for use")),Object(i.b)("h3",{id:"cisco-virl"},"Cisco VIRL"),Object(i.b)("p",null,"Cisco have created another officially supported network simulation platform- Cisco Virtual Internet Routing Lab (VIRL). This is a much more powerful solution when compared to Cisco Packet Tracer and allows not only learning, but simulation of actual networks."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Cisco VIRL is a closer product in comparison to GNS3 allowing network engineers to simulate real world networks in addition to learning Cisco technologies."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Advantages:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Supports Cisco router, switch, firewall and PC simulations (IOSv, IOSvL2, ASAv,"),Object(i.b)("li",{parentName:"ul"},"Good for CCNA, CCNP and CCIE studies"),Object(i.b)("li",{parentName:"ul"},"Supports Cisco Firewalls (ASAv)"),Object(i.b)("li",{parentName:"ul"},"Large number of protocols and features supported: RPVST+, Etherchannel, Port Security, MPLS, VRFs and more. Full list is here: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://virl.cisco.com/work/"}),"http://virl.cisco.com/work/")),Object(i.b)("li",{parentName:"ul"},"Latest versions of Cisco IOS supported (15.X)")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Disadvantages:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Not Free software. You pay $199.99 per year for a Personal Edition VIRL subscription."),Object(i.b)("li",{parentName:"ul"},"Limited number of devices supported. With the personal edition, you are limited to 20 Cisco nodes per topology"),Object(i.b)("li",{parentName:"ul"},"VIRL can be complex to setup and configure."),Object(i.b)("li",{parentName:"ul"},"Resource intensive (requires large amounts of RAM and CPU)"),Object(i.b)("li",{parentName:"ul"},"Requires virtualization software (VMware Workstation Player/Pro, Fusion, or ESXi)"),Object(i.b)("li",{parentName:"ul"},"Does not support VirtualBox"),Object(i.b)("li",{parentName:"ul"},"No multivendor support - only supports Cisco networking devices")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"GNS3 is able to support all VIRL images. You are able to import VIRL images into GNS3 and use them without the per-topology node restriction (you are only limited by your hardware)."))),Object(i.b)("h2",{id:"device-support"},"Device Support"),Object(i.b)("p",null,"GNS3 supports many devices from multiple vendors and more devices are being added all the time. The best place to look for the current list of supported devices is the GNS3 marketplace: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://gns3.com/marketplace/appliances"}),"https://gns3.com/marketplace/appliances")),Object(i.b)("h2",{id:"use-cases"},"Use Cases"),Object(i.b)("p",null,"GNS3 is probably most famous as a platform used for learning and teaching. GNS3 has for years been used by students and network engineers to help practice and prepare for vendor certification exams such as the Cisco CCNA exam."),Object(i.b)("p",null,"GNS3 can however be used for other use cases such as proof of concepts and commercial demonstrations. GNS3 provides an easy, cost effective way to new software such as management or SDN software. It allows you to test multi vendor interoperability using a virtual lab environment rather than requiring dedicated physical equipment."),Object(i.b)("p",null,"An entire GNS3 topology can be created and run on a single laptop. This allows engineers to demonstrate topologies and software to clients and others on the road."),Object(i.b)("p",null,"Classroom environments can also benefit from a preconfigured lab environment that students use to learn networking concepts and technologies."),Object(i.b)("p",null,"Some additional reasons to use GNS3:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Real-time network simulation for pre-deployment testing without the need for network hardware: Run the OS that emulates real behavior of network hardware"),Object(i.b)("li",{parentName:"ul"},"Test 20+ different network vendors in risk-free virtual environment: Quickly run and test multiple hardware vendors without the need for hardware"),Object(i.b)("li",{parentName:"ul"},"Create dynamic network maps for troubleshooting and proof of concept (POC) testing: - Test your networks before you build them to reduce the time it takes to get a production network up and running"),Object(i.b)("li",{parentName:"ul"},"Connect GNS3 to any real network: Leverage your existing hardware and expand your current lab by connecting your GNS3 topologies directly to it"),Object(i.b)("li",{parentName:"ul"},"Customized topologies and labs within GNS3 for network certification training:\nGNS3 is the best study tool for aspiring network professional seeking their certifications, without the need for a home lab.")),Object(i.b)("h2",{id:"versions-of-gns3"},"Versions of GNS3"),Object(i.b)("p",null,"The latest, current release of GNS3 can be found here:\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://gns3.com/software"}),"https://gns3.com/software")),Object(i.b)("p",null,"Development releases of GNS3 can be found here:\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/GNS3/gns3-gui/releases"}),"https://github.com/GNS3/gns3-gui/releases")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Use the latest stable release of GNS3. Only use development releases if you are prepared to encounter issues and loss of GNS3 data. Do not use development releases if you have an exam to prepare for or other type of deadline."))),Object(i.b)("h2",{id:"gns3-help--support"},"GNS3 Help & Support"),Object(i.b)("p",null,"GNS3 provides multiple ways for you to get help including:"),Object(i.b)("h3",{id:"documentation"},"Documentation"),Object(i.b)("p",null,"You can access the GNS3 documentation here:\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.gns3.net"}),"https://docs.gns3.net")),Object(i.b)("h3",{id:"community"},"Community"),Object(i.b)("p",null,"This is one of the best places to get help. Join many thousands of GNS3 users and experts helping each other make the most of GNS3.\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://gns3.com/community"}),"http://gns3.com/community")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"DO"),": Do report bugs and ask questions on the GNS3 community."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"DON\u2019T"),": Don\u2019t ask for illegal stuff or violate GNS3 user policies. Don\u2019t ask for Cisco IOS images. Don\u2019t share Cisco IOS images. Don\u2019t do anything else that infringes copyright or breaks the law."),Object(i.b)("h3",{id:"gns3-youtube-channel"},"GNS3 YouTube channel"),Object(i.b)("p",null,"Watch videos on David Bombal GNS3 channel:",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/playlist?list=PLhfrWIlLOoKPTPPv6ZiNHFM2FKAZ96f-r"}),"https://www.youtube.com/playlist?list=PLhfrWIlLOoKPTPPv6ZiNHFM2FKAZ96f-r")),Object(i.b)("h3",{id:"gns3-courses"},"GNS3 courses"),Object(i.b)("p",null,"Learn about GNS3 by enrolling in GNS3 courses available in the GNS3 Academy:\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://academy.gns3.com"}),"http://academy.gns3.com")),Object(i.b)("h2",{id:"supported-operating-systems"},"Supported Operating Systems"),Object(i.b)("p",null,"GNS3 supports the following operating systems:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Windows 7 (64 bit)"),Object(i.b)("li",{parentName:"ul"},"Windows 8 (64 bit)"),Object(i.b)("li",{parentName:"ul"},"Windows 10 (64 bit)"),Object(i.b)("li",{parentName:"ul"},"Windows Server 2012 (64 bit)"),Object(i.b)("li",{parentName:"ul"},"Windows Server 2016 (64 bit)"),Object(i.b)("li",{parentName:"ul"},"Mac OS X Mavericks (version 10.9) and later."),Object(i.b)("li",{parentName:"ul"},"Linux")),Object(i.b)("p",null,"Additional platforms that can run the GNS3 VM:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ESXi"),Object(i.b)("li",{parentName:"ul"},"Bare Metal Cloud based providers such as Packet.net")),Object(i.b)("h2",{id:"supported-appliances"},"Supported Appliances"),Object(i.b)("p",null,"GNS3 supports multiple operating systems and appliances and emulators.\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"emulators/which-emulators-should-i-use"}),"Which emulator should I use?")),Object(i.b)("h2",{id:"should-you-use-the-gns3-vm"},"Should you use the GNS3 VM?"),Object(i.b)("p",null,"The GNS3 VM is recommended for most situations when you are using Windows or Mac OS. The GNS3 development team have worked hard to create a lightweight, robust way of creating GNS3 topologies that avoids multiple common issues experienced when using a local install of GNS3. This includes the lack of proper Qemu support when running VIRL natively on Windows (not recommended)."),Object(i.b)("p",null,"However, if you only want to create basic GNS3 topologies using Cisco IOS routers, a local (Dynamips) install will suffice. This means that you only install the GNS3 GUI (all-in-one) and don\u2019t use the GNS3 VM."),Object(i.b)("p",null,"This is simpler in some ways to set up, but does have limitations and should be seen as the starting point in your GNS3 journey. As soon as you are comfortable with GNS3, it is recommended that you move to a GNS3 VM setup to make the most of GNS3 options and optimization."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Use the GNS3 VM on Windows and Mac OS. It\u2019s optional, but not required, when running GNS3 natively in Linux."))),Object(i.b)("h2",{id:"what-is-not-supported-or-recommended"},"What is not supported or recommended"),Object(i.b)("h3",{id:"asa-8"},"ASA 8"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"ASA 8 is not supported"))),Object(i.b)("p",null,"You may find a lot of tutorials on the Internet explaining how to extract ASA 8 images from physical hardware devices and use them with GNS3. This method was the only way to get an ASA image in the past, but the results are random; and getting worse with modern computers and operating systems. For example Windows 10 has multiple issues running ASA 8."),Object(i.b)("p",null,"The problem with this way of doing things is that you are using an image made for a bespoke hardware device from Cisco. Qemu can emulate part of the hardware, but some components specific to a physical ASA are missing. For example, the hardware clock on the hardware ASA appliance is missing. The ASA kernel can sometimes replace it depending on the speed of your computer, but results may vary."),Object(i.b)("p",null,"You will also encounter issues when running multiple ASAs simultaneously."),Object(i.b)("h3",{id:"local-install-with-qemu-images"},"Local install with Qemu images"),Object(i.b)("p",null,"GNS3 does not support or recommend the use of Qemu images with a local GNS3 installation on Windows or Mac OS X. You should use Qemu images with the GNS3 VM."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Examples_of_Qemu_images"),"\nIOSvL2, IOSv, IOS-XRv, ASAv, any appliance available on the GNS3 website: ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://gns3.com/marketplace/appliances"}),"https://gns3.com/marketplace/appliances")),Object(i.b)("h3",{id:"complex-topologies"},"Complex topologies"),Object(i.b)("p",null,"When creating complex topologies on Windows or Mac OS, it is recommended that you use the GNS3 VM. Only use a local GNS3 install when creating simple GNS3 topologies."))}p.isMDXComponent=!0},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(r,".").concat(d)]||p[d]||b[d]||i;return a?o.a.createElement(m,s(s({ref:t},l),{},{components:a})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},212:function(e,t,a){"use strict";var n=a(0),o=a(52);t.a=function(){return Object(n.useContext)(o.a)}},213:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(76);var n=a(212),o=a(214);function i(e,t){var a=void 0===t?{}:t,i=a.forcePrependBaseUrl,r=void 0!==i&&i,s=a.absolute,c=void 0!==s&&s,l=Object(n.a)().siteConfig,u=(l=void 0===l?{}:l).baseUrl,p=void 0===u?"/":u,b=l.url;if(!e)return e;if(r)return p+e;if(!Object(o.a)(e))return e;var d=p+e.replace(/^\//,"");return c?b+d:d}},214:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))}}]);