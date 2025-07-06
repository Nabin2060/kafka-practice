
const { kafka } = require('./client');


async function init() {
    const admin = kafka.admin();
    console.log("Admin connecting...");
    await admin.connect();
    console.log("Admin connected...");

    console.log("Creating topic [rider-updates]");
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2,
            },
        ],
    });
    console.log("Topic created successfully [rider-updates]");

    console.log("Disconnecting admin...");
    await admin.disconnect();
    console.log("Admin disconnected.");
}

init();