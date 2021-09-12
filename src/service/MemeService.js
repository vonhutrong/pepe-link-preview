import { join } from 'path'
import { Low, JSONFile } from 'lowdb/lib'



const bootstrapData = [
    { "key": "blood", "url": "https://i.imgur.com/cqXB8aa.png" },
    { "key": "gun", "url": "https://i.imgur.com/ibOvPJg.png" },
    { "key": "smoke1", "url": "https://i.imgur.com/JkdpHqF.png" },
    { "key": "smoke2", "url": "https://i.imgur.com/6IJDQEb.png" },
    { "key": "smoke3", "url": "https://i.imgur.com/iR5bNSv.png" },
    { "key": "liftthecup", "url": "https://i.imgur.com/z5kAWwf.png" },
    { "key": "high5", "url": "https://i.imgur.com/zJNfous.png" },
    { "key": "trump", "url": "https://i.imgur.com/b6pvWjZ.png" },
    { "key": "heart", "url": "https://i.imgur.com/Iba2gtn.png" },
    { "key": "cute", "url": "https://i.imgur.com/LzAWysI.png" },
    { "key": "pray", "url": "https://i.imgur.com/z7TcWyP.gif" },
    { "key": "hammer", "url": "https://i.imgur.com/gorxRrV.png" },
    { "key": "cry", "url": "https://i.imgur.com/StJyCwQ.png" },
    { "key": "but", "url": "https://i.imgur.com/aQHw0Ua.png" },
    { "key": "french", "url": "https://i.imgur.com/Dia6FpR.png" },
    { "key": "coffee", "url": "https://i.imgur.com/tNx0hvf.gif" },
    { "key": "grenade", "url": "https://i.imgur.com/sWvK0BJ.png" },
    { "key": "welltrump", "url": "https://i.imgur.com/KtsyCvL.png" },
    { "key": "well", "url": "https://i.imgur.com/Q2uYl9R.png" },
    { "key": "beer", "url": "https://i.imgur.com/ex3a9EM.png" },
    { "key": "pikachu", "url": "https://i.imgur.com/HkMAB2J.png" },
    { "key": "aaa", "url": "https://i.imgur.com/HgoyTOr.png" },
    { "key": "popcom", "url": "https://i.imgur.com/3sSvAIf.gif" },
    { "key": "snack", "url": "https://i.imgur.com/3sSvAIf.gif" },
    { "key": "humn", "url": "https://i.imgur.com/qqNkq6W.gif" },
    { "key": "what", "url": "https://i.imgur.com/WXSG1nQ.png" },
    { "key": "why", "url": "https://i.imgur.com/uGxjVWw.png" },
    { "key": "whycry", "url": "https://i.imgur.com/XmlUYSq.png" },
    { "key": "rain", "url": "https://i.imgur.com/vhrzVxU.gif" },
    { "key": "wow", "url": "https://i.imgur.com/tH2hggE.png" },
    { "key": "woww", "url": "https://i.imgur.com/Urwn6Wx.png" },
    { "key": "ohgod", "url": "https://i.imgur.com/XifLD8K.png" },
    { "key": "suicidal", "url": "https://i.imgur.com/i6yoKTB.png" },
    { "key": "die", "url": "https://i.imgur.com/ov292aq.png" },
    { "key": "waithumn", "url": "https://i.imgur.com/COqRKFR.png" },
    { "key": "waitwhat", "url": "https://i.imgur.com/QTxYMsS.png" },
    { "key": "oh", "url": "https://i.imgur.com/Ttf7tNK.png" },
    { "key": "crygif", "url": "https://i.imgur.com/sb8AJ2W.gif" },
    { "key": "cryalot", "url": "https://i.imgur.com/7F9iz3T.gif" },
    { "key": "boss", "url": "https://i.imgur.com/vndTxE5.gif" },
    { "key": "hot", "url": "https://i.imgur.com/txj2ovq.gif" },
    { "key": "iknowthatfeel", "url": "https://i.imgur.com/8cEfCrO.png" },
    { "key": "good", "url": "https://i.imgur.com/YaMrMAS.png" },
    { "key": "sweat", "url": "https://i.imgur.com/EtTDccU.png" },
    { "key": "almostdead", "url": "https://i.imgur.com/v6ePsip.png" },
    { "key": "look", "url": "https://i.imgur.com/R0SAovZ.png" },
    { "key": "oxygen", "url": "https://i.imgur.com/D4FyxdE.png" },
    { "key": "cryletter", "url": "https://i.imgur.com/fNpIOyp.png" },
    { "key": "shitjump", "url": "https://i.imgur.com/pQe1RFn.png" },
    { "key": "money", "url": "https://i.imgur.com/adXcihx.png" },
    { "key": "doge", "url": "https://i.imgur.com/QyQKCyI.png" },
    { "key": "army", "url": "https://i.imgur.com/EKoxDwE.png" },
    { "key": "terrorism", "url": "https://i.imgur.com/suTdIGl.png" },
    { "key": "ass", "url": "https://i.imgur.com/BB0OEIG.gif" },
    { "key": "kill", "url": "https://i.imgur.com/NFadrTD.png" },
    { "key": "rest", "url": "https://i.imgur.com/H87rP37.gif" },
    { "key": "prison", "url": "https://i.imgur.com/6JEhqHR.png" },
    { "key": "aaaa", "url": "https://i.imgur.com/YVW3kOr.gif" },
    { "key": "humnn", "url": "https://i.imgur.com/sS1UYIv.png" },
    { "key": "body", "url": "https://i.imgur.com/gz0lpvJ.png" },
    { "key": "yup", "url": "https://i.imgur.com/F9EB1GL.png" },
    { "key": "haha", "url": "https://i.imgur.com/80oGMpF.png" },
    { "key": "killyou", "url": "https://i.imgur.com/HBUInMS.png" },
    { "key": "killyoubitch", "url": "https://i.imgur.com/7bBOjzD.png" },
    { "key": "zooo", "url": "https://i.imgur.com/OID50xl.gif" },
    { "key": "happyfood", "url": "https://i.imgur.com/996tl7T.png" },
    { "key": "humnnn", "url": "https://i.imgur.com/DJ8s4pU.png" },
    { "key": "iamdie", "url": "https://i.imgur.com/9nzmgwp.png" },
    { "key": "sad", "url": "https://i.imgur.com/xkBhAm0.png" },
    { "key": "ohoh", "url": "https://i.imgur.com/qAWhUPv.png" },
    { "key": "really", "url": "https://i.imgur.com/fx8r1pP.png" },
    { "key": "hentai", "url": "https://i.imgur.com/2ST4m28.png" },
    { "key": "died", "url": "https://i.imgur.com/saZYbQL.png" },
    { "key": "mirror", "url": "https://i.imgur.com/4m3TgNI.png" },
    { "key": "ohshit", "url": "https://i.imgur.com/jOTQVEE.gif" },
    { "key": "goodjob", "url": "https://i.imgur.com/ccZaEbF.png" },
    { "key": "mybody", "url": "https://i.imgur.com/U5K62nV.png" },
    { "key": "angry", "url": "https://i.imgur.com/Q1wmHuH.png" },
    { "key": "hihi", "url": "https://i.imgur.com/qT1zNXq.png" },
    { "key": "love", "url": "https://i.imgur.com/MhDKs5k.png" },
    { "key": "vomiting", "url": "https://i.imgur.com/jP6pXxC.png" },
    { "key": "stopguy", "url": "https://i.imgur.com/wgWiP8p.png" },
    { "key": "veryangry", "url": "https://i.imgur.com/Jjqt3oq.png" },
    { "key": "iwillkillyou", "url": "https://i.imgur.com/RsIf78Q.png" },
    { "key": "punch", "url": "https://i.imgur.com/vFTBFNG.gif" },
    { "key": "humnnnn", "url": "https://i.imgur.com/53Otx9d.png" },
    { "key": "aaaaa", "url": "https://i.imgur.com/6PMwLlx.gif" },
    { "key": "sowhat", "url": "https://i.imgur.com/f8i6VYs.png" },
    { "key": "wantsmoke", "url": "https://i.imgur.com/2iXkNki.png" },
    { "key": "pink", "url": "https://i.imgur.com/uCOLsWy.png" },
    { "key": "girl", "url": "https://i.imgur.com/NKJiROB.png" },
    { "key": "nani", "url": "https://i.imgur.com/1hvwVjA.png" },
    { "key": "ohshitt", "url": "https://i.imgur.com/tyWHNKO.gif" },
    { "key": "keke", "url": "https://i.imgur.com/VeVDKKL.png" },
    { "key": "truth", "url": "https://i.imgur.com/XvKlSHh.png" },
    { "key": "takemymoney", "url": "https://i.imgur.com/1TJBCl2.png" },
    { "key": "surrender", "url": "https://i.imgur.com/mKafgLW.png" },
    { "key": "fuck", "url": "https://i.imgur.com/EBnRHm8.png" },
    { "key": "blink", "url": "https://i.imgur.com/VZqdJxG.png" },
    { "key": "loser", "url": "https://i.imgur.com/uwHuPqf.png" },
    { "key": "blackmen", "url": "https://i.imgur.com/xU1QBfL.png" },
    { "key": "ok", "url": "https://i.imgur.com/MShOXoy.png" },
    { "key": "lookscreen", "url": "https://i.imgur.com/LaD6s3b.png" },
    { "key": "ah", "url": "https://i.imgur.com/IMI6sf5.png" },
    { "key": "lookstraight", "url": "https://i.imgur.com/IMI6sf5.png" },
    { "key": "lookstraighthumn", "url": "https://i.imgur.com/mdIg5le.png" },
    { "key": "lookright", "url": "https://i.imgur.com/o36qW68.png" },
    { "key": "hahaha", "url": "https://i.imgur.com/3C5oOhq.gif" },
    { "key": "humnnnnn", "url": "https://i.imgur.com/NaWSe2O.png" },
    { "key": "aaaaaa", "url": "https://i.imgur.com/pDVzet1.png" },
    { "key": "whatt", "url": "https://i.imgur.com/iIFzqFH.png" },
    { "key": "dontlook", "url": "https://i.imgur.com/9DBVq8A.png" },
    { "key": "toosad", "url": "https://i.imgur.com/p2S0Y1T.png" },
    { "key": "cool", "url": "https://i.imgur.com/9qMpr47.png" },
    { "key": "shit", "url": "https://i.imgur.com/NtC1dhD.png" },
    { "key": "weet", "url": "https://i.imgur.com/ULydGrv.png" },
    { "key": "lookyou", "url": "https://i.imgur.com/CfyFJPj.png" },
    { "key": "hahahaha", "url": "https://i.imgur.com/gGgsMaJ.png" },
    { "key": "wannafuck", "url": "https://i.imgur.com/okgiSQc.png" },
    { "key": "wannadie", "url": "https://i.imgur.com/269kBem.png" },
    { "key": "alreadydied", "url": "https://i.imgur.com/cne7WNc.png" },
    { "key": "shutup", "url": "https://i.imgur.com/oMK2OhN.png" },
    { "key": "bored", "url": "https://i.imgur.com/xhG7uLU.png" }
];

export default function getBootstrapData() {
    // Use JSON file for storage
    const file = join(__dirname, 'db.json')
    console.log("Path: ", file);
    const adapter = new JSONFile(file)
    const db = new Low(adapter)

    // // Read data from JSON file, this will set db.data content
    //  db.read()

    // // db.data = db.data != null ? db.data : { memes: [] }

    // console.log("DB data: ", db.data);
    // if (db.datadb.data.memes.length === 0) {
    //     db.data.memes.push(bootstrapData);
    //      db.write()
    // }


    return bootstrapData;
}