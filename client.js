const { Kafka } = require('kafkajs');


exports.kafka = new Kafka({
    clientId: 'my-app',
    brokers: ["youripaddress:9092 "],
});