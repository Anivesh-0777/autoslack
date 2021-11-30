// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const dbName = 'test';
// const client = new MongoClient(url);

// const SlackBot = require('slackbots');
// const axios = require('axios');

// async function ReadUser(){
//     try{
//         await client.connect()
//         const database= client.db(dbName)
//         const users = database.collection('users');
//         const value=await users.find({}).toArray();
//         // console.log(value)
//         const names =[]
//         const data = await users.aggregate([
//           { 
//             $match: {
//               $expr: {
//                 $and: [
//                   { $eq: [{ $dayOfMonth: '$DOB' }, { $dayOfMonth: new Date() }] },
//                   { $eq: [{ $month: '$DOB' }, { $month: new Date() }] },
//                 ],
//               },
//             }
//           }
//         ]).toArray()
//         // console.log(data)
//         data.map(user=>{
//           names.push(user.name)
//         })
//         console.log(names)


//         const bot = new SlackBot({
//               token:"xoxb-2723242021222-2728503775286-VkhxIgNryDI8vgsOayPjau26",
//               usertoken:"xoxp-2723242021222-2726994179717-2735210921602-1738f6b4628233441010b2cd280b800d",
//               singingSecret:"24e3446bf93a083b9f35c974ded37226",
//               name: 'Team_Valuebound'
              
//           });

          
//           names.map(i=>{

          
//           // Start Handler
//           bot.on('start', () => {
//             const params = {
//               icon_emoji: ':smiley:'
//             };
          
//             bot.postMessageToChannel(
//               'team-testing',
//               `happy birthday <@${i}>!`,
//               params
//             );
//            bot.postMessageToUser(
//               "Bhadauriya",
//               'happy birthday @whoever',
//               params
//             );
          
//           })
//         })
          
          
//           bot.on('error', err => console.log(err));
          
          
          
          

      



//     }
//     catch(e){
//         console.log(e)
//     }
//     finally{
//         console.log("done")
//         await client.close();
//     }
// }
// ReadUser().catch(console.dir);












const fetch = require("node-fetch");

const SLACK_BOT_TOKEN = "xoxb-2723242021222-2728503775286-VkhxIgNryDI8vgsOayPjau26";

const payload = {
  channel: "Bhadauriya",
  attachments: [
    {
      title: "My first Slack Message",
      text: "Random example message text",
      author_name: "alejandrogonzalez3",
      color: "#00FF00",
    },
  ],
};

fetch("https://slack.com/api/chat.postMessage", {
  method: "POST",
  body: JSON.stringify(payload),
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": payload.length,
    Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
    Accept: "application/json",
  },
})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Server error ${res.status}`);
    }

    return res.json();
  })
  .catch((error) => {
    console.log(error);
  });