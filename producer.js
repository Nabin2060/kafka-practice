const { kafka } = require('./client');

async function init() {

    const producer = kafka.producer();
    console.log("Producer connecting...");
    await producer.connect();

    console.log("Producer connected...");

    await producer.send({
        topic: "rider-updates",
        messages: [
            {
                partition: 0,
                key: "location-update",
                value: JSON.stringify({ name: "ram roy", location: "sanoth" }),
            }
        ]
    })
    await producer.disconnect();
    console.log("Producer disconnected.");
}

init();