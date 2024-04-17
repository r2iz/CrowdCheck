const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

functions.region("asia-northeast1");

exports.getCongestion = functions.https.onRequest(async (request, response) =>{
    const db = admin.firestore();
    const congestionRef = db.collection("exhibition");
    const snapshot = await congestionRef.get();
    const exhibitionIdArray = [0,1,10,11,12,13,14,15,16,17,18,19,2,20,21,22,23,24,25,26,27,28,29,3,30,31,32,33,34,35,36,37,38,39,4,40,41,42,43,44,45,46,47,5,6,7,8,9];
    const congestionArray = [];
    const congestion = snapshot.docs.map((doc, index) => {
        congestionArray.push({
            exhibitionId: exhibitionIdArray[index],
            nowCongestion: doc.data().nowCongestion,
            updatedDate: doc.data().updatedDate,
        });
    });
    const cacheAge = 600;
    response.set("Cache-Control", `public, max-age=${cacheAge}`);
    response.set('Access-Control-Allow-Headers', '*');
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');
    response.status(200).send(congestionArray);
    response.end();
});