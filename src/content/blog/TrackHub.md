---
title: TrackHub
date: 2019-06-17 16:50:02
tags: [VUE,Django,Ansible,NLP,Grafana,CouchDB,ReST,OSS,NSFW]
categories: ["Study Notes", "Full Stack"]
---
## Introduction
![TrackHub](https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/img/clustercloudcomputing/trackhub.png)
This is project 2 of [Cluster and Cloud Computing (COMP90024) Semester 1, 2019](https://handbook.unimelb.edu.au/2019/subjects/comp90024), University of Melbourne, named "TrackHub". TrackHub  is  a  real-time  platform  that  could  track  the  twitter  user  and  theirpost content.  Our system analyzes the text and image posted by the user.  Theresults will be grouped by geolocation bounding box for further analysis.  Thefrontend  will  also  able  to  load  AURIN  data  to  build  the  data  visualizations.Currently, our system focuses on three of the seven deadly sins, the Lust, theWrath, and the Gluttony.

### Video Link
Youtube link: https://youtu.be/M5xhnEHwKNg/
<!--more-->

### Project Background
* Build a cloud based scalable system that can track Twitter user movement. The software system should be easy be maintain and fault-tolerant.
* Ability to analysis the text and image content of the Tweets based on the Seven Deadly Sins. The data analysis section should also be easy to scale or add additional models to analyze the different content.

### Source Code

https://github.com/jamesxwang/COMP90024-TrackHub