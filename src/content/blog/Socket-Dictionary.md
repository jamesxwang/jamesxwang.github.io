---
title: Socket Dictionary
date: 2018-09-07 00:23:07
tags: [Socket,Multi-thread]
categories: ["Study Notes", "Back End"]
---

## Introduction
This is project 1 of [Distributed Systems (COMP90015) Semester 2, 2018](https://handbook.unimelb.edu.au/2018/subjects/comp90015), University of Melbourne. The program implemented a dictionary server and a client through multiple threads and sockets. The dictionary system follows a Client-Server structure with a thread-per-connection architecture. Dictionary datafile uses JSON format with a Java version of 8 and maven version of 3.5 for packaging jar files.  
### Download the source code
Link: https://github.com/jamesxwang/Dictionary/
<!--more-->

### How to run?
+ Server: `java -jar Server.jar`
+ Client: `java -jar Client.jar <optional-host> <optional-port>` 

### Function
Once Server established the Server Socket, Clients can connect to the server and query, add, remove words from the dictionary on Server.

## System structure
### Class Structure
In this design, there are total 15 classes, in which 7 of them are core classes in the Server end, 4 of them are core classes in the Client end, 4 enumeration files for message transmission. Dependencies and the definition between classes are shown below.
![server-class-diagram](https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/img/socket/server-class-diagram.png)
The main class is < Server > which extends “JavaFX.Application” for creating a Server GUI for the server. Class < ServerController > handles the actions when pressing button on the UI of the server, including establishing and closing the ServerSocket. < Handler > is a class that extends Thread, does the loop to monitor new clients connected to the server socket. If there is a client sending a request for connecting to the socket, the server socket accepts it and create a new Thread for each client in the class MessageListener. < MessageListener > is a class that extends Thread, handling the requests sent by the clients, such as searching words in the dictionary, adding a new word to the dictionary and deleting an exist word from the dictionary. < Information > is a class for getting and setting information from / to the table on the server UI. Class < Dictionary > handles between HashMap and the dictionary file, including operations of reading, writing and updating JSON file from / to HashMap. < Message > is a class that extends Serializable, setting up a message criterion between client-end. < MessageType > and < Status > are enumeration files for message types (add, search and delete) and (exist, inexistent and connected), respectively.
![client-class-diagram](https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/img/socket/client-class-diagram.png)
As for the Client end, class < Client > is the main class, which extends “JavaFX.Application” for creating the GUI. Class < Controller > initializes background animation for the GUI and implements the logic when pressing down buttons on the client-end’s UI. As long as the UI is opened, it sends a request for connecting to the server through stream socket. Once it is connected, < MessageListener > handles for messages from the client UI and sends it to the output stream, meanwhile listen to the input stream from the socket. Same as the server, Class < Message >, < MessageType > and < Status > are in client-end are as same as the server. The overall class design of core classes is shown below.
![overall-class-diagram](https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/img/socket/overall-class-diagram.png)
### Interaction Diagram
![interaction-diagram](https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/img/socket/interaction-diagram.png)
The Interaction diagram is shown above. As long as the Server Socket is established, clients can make requests through their own thread. Server updates the dictionary once it has been changed so that the next query from clients doesn’t need to read the dictionary again.
### Flow Chart
![flow-chart](https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/img/socket/flow-chart.png)
The procedure of the system is shown in the flow chart diagram above. First, the server socket establishes when the start button on server UI is clicked, then creates a thread for listening new connects. Once a client request for connecting to the server, a thread will be created for connecting the client and the server. Message listener in clients and server will be handling the message transmission. The operation of writing new words and definition to the dictionary file is synchronized so that clients can write to the server one by one.

## System design
### Functional
Clients can query the meaning of a given word, add a new word and remove an existing word, the input and output are clear and users can know exactly what when wrong when errors occur. For the server, it can handle every message been sent by every client and catch all exceptions.
### Multi-Threads
The designing for socket-thread I use is thread per connection, i.e. whenever a new connection is created, a thread is created. For the server, one thread will be handling connections between clients and one thread will be handling operations such as searching words in the dictionary, etc.
### Graphical User Interface
I designed and implemented a graphical user interface for both Server and Client using JavaFX in Java 8. Among them, a TableView is created for listing operations sent by the Client. The UI snapshot is shown below.
![Server1](https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/img/socket/Server1.png) 
![Client1](https://cdn.jsdelivr.net/gh/jamesxwang/cdn@master/img/socket/Client1.png) 

## Conclusion
The reasons for designing this socket dictionary system to “Thread-per-connection” are as follows. First of all, it is guaranteed that the main thread will only block on the accept call and will not be blocked by other situations, especially by the specific application processing code such as searching words etc. Second, unlike “Thread-per-request”, it is more convenient for server managing the clients’ requests. But this kind of design can’t guarantee connection concurrency, which means if thousands of people try to connect one server, only the first few of them can connect successful and others would wait until the previous clients disconnect the server.
