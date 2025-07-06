const { Kafka, kafka } = require('./client');

async function init() {

    const consumer = kafka.consumer({ groupId: 'user-1' });
    console.log("Consumer connecting...");
    await consumer.connect();
    console.log("Consumer connected...");

    await consumer.subscribe({ topic: 'rider-updates', fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`[${topic}]: PART:${partition}:`, message.value.toString());
        },
    });


}
init();